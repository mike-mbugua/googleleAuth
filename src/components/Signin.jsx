import React, { useEffect, useState } from "react";
import "./signin.css";
import { auth, provider } from "./../config/config";
import { signInWithPopup } from "firebase/auth";
import Homepage from "./homepage/Homepage";

function Signin() {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      console.log(data);
      localStorage.setItem("Email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);
  return (
    <div className="sign__container">
      {value ? (
        <Homepage />
      ) : (
        <button className="google" onClick={handleClick}>
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default Signin;
