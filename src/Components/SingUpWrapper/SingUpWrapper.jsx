import { useForm } from "react-hook-form";
import "./SingUpWrapper.css";
function SingUpWrapper() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signupformwrapper">
      <div className="emailwrapper">
        <p>Email address</p>
        <input
          {...register("emailadress", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="text"
          placeholder="ABC@gmail.com"
        />
        {errors?.emailadress && <span>{errors?.emailadress?.message}</span>}
      </div>
      <div className="passwordpass">
        <p>Password</p>
        <input
          {...register(
            "password",
            { minLength: { value: 4, message: "minLength is 4 char" } },
            { required: "please enter password" }
          )}
          type="password"
        />
        {errors?.password && <span>{errors?.password?.message}</span>}
        <p>confirm password</p>
        <input
          {...register("confirmpassword", {
            required: "please confirm your password",
            validate: (value) => value === password || "Passwords do NOT match",
          })}
          type="password"
        />
        {errors?.confirmpassword && (
          <span>{errors?.confirmpassword?.message}</span>
        )}
      </div>
      <div className="btnloginwrapper">
        <button className="button-38" role="button">
          Register
        </button>
      </div>
    </form>
  );
}

export default SingUpWrapper;
