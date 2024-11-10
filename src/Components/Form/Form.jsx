import { useSearchParams } from "react-router-dom";
import "./Form.css";
import { useQuery } from "@tanstack/react-query";
import getreversegeocodingaPI from "../../services/getreversegeocodingaPI";
import { useEffect, useState } from "react";
import { Commet } from "react-loading-indicators";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Form() {
  const [startDate, setStartDate] = useState(new Date());
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const {
    isLoading,
    data: citydata,
    error,
    refetch,
  } = useQuery({
    queryKey: ["lat-lng", lat, lng],
    queryFn: () => getreversegeocodingaPI(lat, lng),
    enabled: !!lat && !!lng,
  });

  useEffect(() => {
    if (lat && lng) {
      refetch();
    }
  }, [lat, lng, refetch]);

  const country = citydata?.results[0]?.components?.country || "";
  const city = citydata?.results[0]?.components?.city || "";
  const Region = citydata?.results[0]?.components?.region || "";
  const village = citydata?.results[0]?.components?.village || "";

  if (isLoading)
    return (
      <Commet color="#4c74b3" size="large" text="loading" textColor="#ffffff" />
    );
  if (error) return <div>Error fetching city data</div>;

  return (
    <div className="formwrapper">
      <div className="cityname">
        <label htmlFor="" className="labelform">
          City name
        </label>
        <input
          type="text"
          value={`${country} ${city} ${Region}${village}`.trim()}
          readOnly
        />
      </div>
      <div className="dataofadventur">
        <label htmlFor="">When did you go to Hontoba?</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="datepicker"
          dateFormat="yyyy/MM/dd"
        />
      </div>
      <div className="noteofadventur">
        <label htmlFor="">Notes about your trip to Hontoba</label>
        <input type="text" name="" id="" />
      </div>
      <div className="formbtn">
        <button>Add</button>
        <button>Back</button>
      </div>
    </div>
  );
}

export default Form;
