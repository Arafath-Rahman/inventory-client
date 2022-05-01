import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    console.log('errors', errors);
  };

  return (
    <div id="login-container" className="mx-auto">
      <h2 className="text-center my-5">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-100 border rounded px-2 py-2 fs-5 mb-3"
          {...register("email", { required: true })}
          placeholder="Your Email" type="email"
        />
        <input
          className="w-100 border rounded px-2 py-2 fs-5 mb-3"
          {...register("password", { required: true })}
          placeholder="Password" type="password"
        />
        {errors.password && "Last name is required"}
        <input
          type="submit"
          value="Login"
          className="d-block mx-auto border rounded"
        />
      </form>
      <div className="my-3 text-center">
        <p>Need an account? <Link to="/signup">SignUp here.</Link> </p>
      </div>
      <div className="d-flex gap-2 justify-content-center align-items-center my-5">
        <div style={{height: '1px'}} className="w-25 border"></div>
        <div>Or</div>
        <div style={{height: '1px'}} className="w-25 border"></div>
      </div>
    </div>
  );
};

export default Login;
