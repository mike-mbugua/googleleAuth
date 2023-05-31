import React from "react";
import "./homepage.css";
function Homepage() {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="home__container">
      <p>
        Welcome <span className="local"> {localStorage.email}</span>
      </p>
      <br />
      <img src={localStorage.photo} alt="" />
      <button className="google" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
}

export default Homepage;
