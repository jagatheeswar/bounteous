import React from "react";
import Poster from "./Poster";
import bounteous from "../images/bounteous2.svg"

function Navbarr(){
    return(
        <div id="posterdiv">
        <nav class="navbar navbar-expand-lg" id="navbar">
        <img style ={{marginTop:'0px',marginLeft:'3px'}} src={bounteous} height="88px" width="88px"/>
        <button class="navbar-toggler" id="navbutton" type="button" data-toggle="collapse" data-target="#navbardiv" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" id="togglebutton">≡</span>
        </button>
        <div class="collapse navbar-collapse" id="navbardiv" >
          <ul class="navbar-nav ml-auto" id="myul">
            <li class="nav-item active ml-5" style={{textAlign: "center"}}>
              <a class="nav-link" href="#">Client Stories<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ml-5" style={{textAlign: "center"}}>
              <a class="nav-link" href="#">Co-Innovation</a>
            </li>
            <li class="nav-item ml-5" id="liitem" style={{textAlign: "center"}}>
              <a class="nav-link" href="#">Our Expertise</a>
            </li>
            <li class="nav-item ml-5" style={{textAlign: "center"}}>
              <a class="nav-link disabled" href="#">Our People</a>
            </li>
            
            <li class="nav-item ml-5" style={{textAlign: "center"}}>
              <a class="nav-link disabled" href="#">About us</a>
            </li>
            
            
            
          </ul>
        </div>
      </nav>
      <Poster />
            
      </div>
        
    )
}

export default Navbarr;