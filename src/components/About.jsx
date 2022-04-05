import React from "react";
import './about.css';

function About() {
  return (
    <div className="about">
      <h1 class="font-weight-light">About</h1>
      <p className = "about-bio">
        This app was designed to give its users a place to go if they need someone to consult on their emotions and feelings. 
        This app is a work in progress so bare with us and feel free to offer any advice on what to add in the future.
      </p>
      <p className = "about-credits">
        Brought to you by <br></br>Jacob Souro and David Cirenese
      </p>
    </div>
  );
}

export default About;