import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer, Home, About } from "./components"

function App(){
  return(
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element ={<About/>} />
        </Routes>
        <Footer />
        </Router>
        </div>
  )
}

export default App;



















// //source pic: https://www.nicepng.com/ourpic/u2t4u2e6a9a9u2r5_counseling-clipart-of-psychologist/

//note to self possibly fix footer 1//5/2022


/////////below is how to make a link

// {/* <a
// className="new-app-link"
// href="./About.js"
// target="_self"
// rel="noopener noreferrer"
// >
//   About
// </a>  */}





























////////////////////////////////////////////////////////////////////////////////////////////NO NEED TO USE JUST NOTED 1/5/2022
// import './App.css';
// import React from "react";
// import Search from './search';
// import pic from './scale.png'


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



// function Home() {
//   return (
//     <Router>
//     <div className="Home">
      
//       <header className="App-header">
//       <Search /> 
//         <img src={pic} className="App-logo" alt="logo" /> 
//       </header>
//     </div>
//   );
// }

// export default Home;
////////////////////////////////////////////////////////////////////////////////////////////NO NEED TO USE JUST NOTED 1/5/2022
