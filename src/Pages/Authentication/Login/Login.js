import React from "react";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import Social from "../Social/Social";
import "./Login.css";

const Login = () => {
  let location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [signInWithEmailAndPassword, loggedUser, loggedLoading, loggedError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
    // const {data} = await axios.post("https://pran-dealer-inventory.herokuapp.com/getToken", {email});
    // console.log(data);
    fetch("https://pran-dealer-inventory.herokuapp.com/getToken", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((tokenData) => {
        // save token to localStorage
        localStorage.setItem("accessToken", tokenData.accessToken);
      });
    reset();
  };

  const gotoPrevLocation = () => navigate(from, { replace: true });

  if (loggedUser?.user?.uid || googleUser?.user?.uid) {
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
    gotoPrevLocation();
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleResetpassword = async () => {
    const email = document.getElementById("email").value;
    if (email !== "") {
      await sendPasswordResetEmail(email);
      toast.success("Password reset email sent!");
      document.getElementById("email").value = "";
      return;
    } else {
      toast.warn("Please provide an Email!");
      return;
    }
  };

  if (googleLoading || loggedLoading || sending) {
    return <LoadingSpinner />;
  }

  return (
    <div id="login-container" className="mx-auto">
      <h2 className="text-center my-5">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-100 border rounded px-2 py-2 fs-5 mb-3"
          id="email"
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
        {errors.password && "Last name is required"}
        <input
          type="submit"
          value="Login"
          className="d-block mx-auto border rounded"
        />
      </form>
      <div className="my-3 text-center">
        <p>
          Need an account? <Link to="/signup">SignUp here.</Link>{" "}
        </p>
      </div>
      <div className="my-3 text-center">
        <p>
          Forgot password?{" "}
          <button
            onClick={() => handleResetpassword()}
            className="btn btn-link"
          >
            Reset it now.
          </button>
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

export default Login;
