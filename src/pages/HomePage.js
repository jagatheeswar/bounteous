import React from "react";


import "../styles/Navbar.css"
import "../styles/Poster.css"
import "../styles/Profile.css"
import "../styles/Profileabout.css"
import "../styles/Slider.css"
import "../styles/Footer.css"
import scrollback from "../javascript/scrollbackward";
import scrollfront from "../javascript/scrollforward";
import Navbarr from "../components/Navbarr";
import Profile from "../components/Profile";
import Linebreak from "../components/linebreak";

import wingstop from "../images/wingstop.png"
import wava from "../images/wava.png"
import dominos from "../images/dominos.jpg"
import mars from "../images/mars.svg"
import coke from "../images/cocacola.jpg"
import Slider from "../components/Slider";
import Footer from "../components/Footer";
function HomePage(){
    return(
        <div className="maincontainer">
            
            <Navbarr />
            <Profile />
        <Linebreak />        
            <div id="slider">

                <div id="containerdiv">
                <h1>FEATURED CLIENTS</h1>
                <br></br><br></br><br></br>
                 <div className="flexcontainer" id="scrolling">
               
                <Slider image={coke} desc={"Delighting Consumers With a New Channel for a Beloved Brand"} />
                <Slider image={dominos} desc={"Delivering Smiles Since 2008"} />
                <Slider image={mars} desc={"We work with Mars to shape the future."} />
                <Slider image={wingstop} desc={"Taking the Party Digital To Unlock Business Growth"} />
                <Slider image={wava} desc={"Today, we’re Wawa’s digital copilot"} />
                </div>

                <p className="mt-5" style={{textAlign:"center"}}><span style={{border:'2px solid white',borderRadius:'50%',paddingRight:'8px',paddingLeft:'8px',paddingTop:'4px',paddingBottom:'4px'}} className="arrow" onClick={scrollfront}><i className="fa fa-arrow-right"></i></span>&nbsp;&nbsp;&nbsp;<span className="arrow" onClick={scrollback} style={{border:'2px solid white',borderRadius:'50%',paddingRight:'8px',paddingLeft:'8px',paddingTop:'4px',paddingBottom:'4px'}}><i className="fa fa-arrow-left"></i></span></p>
                
                <br></br><br></br><br></br>
                
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;

