import React from "react";
import "../styles/main.css"
function Slider({image,desc}){
    return(
                <div id="slider-one">
                
                <img src={image} width="100%" height="100%" />
                {/* <button id="floatbutton">Live</button> */}
                <p id="floatbutton">{desc}</p>
                </div>   
    )
}
export default Slider;