import { useSearchParams } from "react-router-dom";
import "./Form.css";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Commet } from "react-loading-indicators";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import getreversegeocodingaPI from "../../services/getreversegeocodingaPI";
import { useDispatch } from "react-redux";
import { addTrip } from "../../tripSlice/tripSlice";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const [location, setLocation] = useState({
    country: "",
    city: "",
    region: "",
    village: "",
  });

  const {
    isLoading,
    data: citydata,
    error,
  } = useQuery({
    queryKey: ["lat-lng", lat, lng],
    queryFn: () => getreversegeocodingaPI(lat, lng),
  });

  useEffect(() => {
    if (citydata) {
      const country = citydata.results[0]?.components?.country || "";
      const city = citydata.results[0]?.components?.city || "";
      const region = citydata.results[0]?.components?.region || "";
      const village = citydata.results[0]?.components?.village || "";
      setLocation({ country, city, region, village });
      const locationValue = `${country} ${city || region || village}`.trim();
      setValue("city", locationValue);
    }
  }, [citydata, setValue]);

  if (isLoading)
    return (
      <Commet color="#4c74b3" size="large" text="loading" textColor="#ffffff" />
    );
  if (error) return <div>Error fetching city data</div>;

  if (!citydata)
    return (
      <Commet color="#4c74b3" size="large" text="loading" textColor="#ffffff" />
    );

  function onSubmit(data) {
    if (data) {
      const newdata = { ...data, lat, lng, id: uuidv4() };
      dispatch(addTrip(newdata));
      navigate("/app/cities");
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formwrapperapp">
      <div className="cityname">
        <label htmlFor="" className="labelform">
          City name
        </label>
        <input
          type="text"
          value={`${location?.country} ${location?.city} ${location.region} ${location.village}`.trim()}
          {...register("city", { required: "just click on the Map" })}
        />
        {errors?.city && <span>{errors?.city?.message}</span>}
      </div>
      <div className="dataofadventur">
        <label htmlFor="">
          When did you go to{" "}
          {location?.city || location.region || location.village}?
        </label>
        <input
          {...register("date", {
            required: "please select a date",
          })}
          className="datepicker"
          type="date"
        />
        {errors?.date && <span>{errors?.date?.message}</span>}
      </div>
      <div className="noteofadventur">
        <label htmlFor="">
          Notes about your trip to {"  "}
          {location?.city || location.region || location.village}
        </label>
        <input
          type="text"
          {...register("note", {
            required: "please write a Notes about your trip",
          })}
        />
        {errors?.note && <span>{errors?.note?.message}</span>}
      </div>
      <div className="formbtn">
        <button type="submit">Add</button>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </form>
  );
}

export default Form;
