import React from "react";
import insta from "../images/insta.svg"
import li from "../images/linked.svg"
import tw from "../images/twitter.svg"
import lin from "../images/spotify.svg"
import location from "../images/location.svg"
import Body from "../components/body";

import Buttons from "../components/buttons"


function Profile(){
    return(
<>
<h1 className="name">BOUNTEOUS</h1>
<p className="aboutpara">Being Bounteous is about collectively committing to our core values and knowing that we are more than any one individual or any one goal. When we adopt diverse perspectives that push us forward, we create opportunities to meaningfully transform our company, clients, and community.</p>

    <div id="icon">
    <a href="https://www.linkedin.com/company/bounteous/jobs?trk=nav_type_jobs"><img src={lin} width="18px" className="m-3" height ="19px" /></a>
    <a href="https://twitter.com/Bounteous"><img src={insta} width="18px" height ="19px" className="m-3" /></a>
    <a href="https://www.facebook.com/thisisbounteous/"><img src={li} width="18px" height ="19px" className="m-3" /></a>
    <a href="https://www.instagram.com/thisisbounteous/?hl=en"><img src={tw} width="18px" height ="19px" className="m-3" /></a>
    </div>
    <div id="icon" className="ml-2">
        <br></br>
    <img src={location} width="18px" className="m-2" height="19px" /> 
    <span>Locations</span><Buttons heading={'USA'} /><Buttons heading={'Canada'} /><Buttons heading={'Mexico'} /><Buttons heading={'India'} /> 
    </div>
    
    <Body />
    
           </>
    )
}

export default Profile;
