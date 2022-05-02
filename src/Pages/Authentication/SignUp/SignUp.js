import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
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

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

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

  if(googleLoading || signedLoading) {
    return <LoadingSpinner />;
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  }

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
          className="w-100 border rounded px-2 py-2 fs-5 mb-3"
          {...register("email", { required: true })}
          placeholder="Your Email"
          type="email"
        />
        <input
          className="w-100 border rounded px-2 py-2 fs-5 mb-3"
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
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
