import axios from "axios";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import Social from "../Social/Social";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [
    createUserWithEmailAndPassword,
    signedUser,
    signedLoading,
    signedError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const onSubmit = (data) => {
    const { email, password } = data;
    createUserWithEmailAndPassword(email, password);
    reset();
  };

  const gotoHome = () => navigate("/");

  if (signedUser?.user?.uid || googleUser?.user?.uid) {
    toast.success("SignUp Successful!", {
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
  }

  if (googleLoading || signedLoading) {
    return <LoadingSpinner />;
  }

  const regTokenOnGoogleSignIn = async (email) => {
    const { data } = await axios.post("http://localhost:5000/getToken", {
      email,
    });
    if (data) {
      // save token to localStorage
      localStorage.setItem("accessToken", data.accessToken);
    }
  };

  if (googleUser) {
    regTokenOnGoogleSignIn(googleUser.user.email);
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <div id="signup-container" className="mx-auto">
      <h2 className="text-center my-5">SignUp</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-100 border rounded px-2 py-2 fs-5 mb-3"
          {...register("name", { required: true })}
          placeholder="Your Name"
        />
        <input
          className="w-100 border rounded px-2 py-2 fs-5"
          {...register("email", { required: true })}
          placeholder="Your Email"
          type="email"
        />
        <span className="d-block mb-3 text-danger">{errors.email?.message && <BsFillInfoCircleFill className="me-2" />}{errors.email?.message}</span>
        <input
          className="w-100 border rounded px-2 py-2 fs-5"
          {...register("password", { required: true  , minLength: {
            value: 6, 
            message: "Password should be atleast 6 characters long."
          }})}
          placeholder="Password"
          type="password"
        />
        <span className="d-block mb-3 text-danger">{errors.password?.message && <BsFillInfoCircleFill className="me-2" />}{errors.password?.message}</span>
        <input
          type="submit"
          value="SignUp"
          className="d-block mx-auto border rounded"
        />
      </form>
      <div className="my-3 text-center">
        <p>
          Already have an account? <Link to="/login">Please Login.</Link>{" "}
        </p>
      </div>

      <div className="d-flex gap-2 justify-content-center align-items-center my-5">
        <div style={{ height: "1px" }} className="w-25 border"></div>
        <div>Or</div>
        <div style={{ height: "1px" }} className="w-25 border"></div>
      </div>
      <Social handleGoogleSignIn={handleGoogleSignIn}></Social>
    </div>
  );
};

export default SignUp;
