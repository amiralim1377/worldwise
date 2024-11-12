import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../userSlice/userSlice";
import { useEffect } from "react";
import "./LoginWrapper.css";
function LoginWrapper() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isAuthenticated = useSelector((state) => state?.user?.isAuthenticated);
  const isUser = useSelector((state) => state?.user?.user);
  console.log(isUser.length);

  function onSubmit(data) {
    // console.log(data);
    dispatch(loginUser({ email: data?.email, password: data?.password }));
  }
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app");
    }
  }, [isAuthenticated, navigate]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formwrapperlogin">
      <div className="emailwrapper">
        <p>Email address</p>
        <input
          {...register("email", { required: "Enter Email" })}
          type="text"
          placeholder="ABC@gmail.com"
        />
        {errors?.email && <p role="alert">{errors?.email.message}</p>}
      </div>
      <div className="passwordpass">
        <p>Password</p>
        <input
          {...register("password", { required: "Enter password" })}
          type="password"
        />
        {errors?.password && <p role="alert">{errors?.password.message}</p>}
      </div>
      <div className="btnloginwrapper">
        {isUser.length > 0 ? (
          <>
            <button type="submit" className="button-37" role="button">
              Login
            </button>

            <button
              onClick={() => navigate("/singup")}
              className="button-38"
              role="button"
            >
              SING UP
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/singup")}
            className="button-38"
            role="button"
          >
            SING UP
          </button>
        )}
      </div>
    </form>
  );
}

export default LoginWrapper;
