// Home.js
import React from "react";

function Home() {
  const username = localStorage.getItem("username");

  return (
    <div style={{ justifyContent:'center', display: 'flex'}}>
      <h1>Welcome! {username}!</h1>
    </div>
  );
}

export default Home;
