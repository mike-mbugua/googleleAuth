import React from "react";

function Homepage() {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      Homepage
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default Homepage;
