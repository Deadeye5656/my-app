import '../App.css';
import React from "react";
import Search from '../search';
import pic from '../scale.png'

function Home() {
  return (
    <div className="Home">
      
      <header className="Home-header">
      <Search /> 
        <img src={pic} className="App-logo" alt="logo" /> 
      </header>
    </div>
  );
}

export default Home;