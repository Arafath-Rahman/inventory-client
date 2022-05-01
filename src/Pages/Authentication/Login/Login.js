import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [
    signInWithEmailAndPassword,
    loggedUser,
    loggedLoading,
    loggedError,
  ] = useSignInWithEmailAndPassword(auth);
  
  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
    reset();
    
  };

  const gotoHome = () => navigate("/");

  if (loggedUser?.user?.uid) {
    toast.success("Login Successful!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "success1",
    });
    gotoHome();
    console.log(loggedUser);
  }

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
