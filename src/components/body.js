import React from "react";
import video from "../videos/bounteousvideo.mp4"
function Body(){
    return(
<div id=""> 
        <div className="bodyflex mt-5 ">
            <div id="videotext">
        <p>
        Check out how bounteous provides collobrative and excellent digital transformation solutions
        </p>
        <p id="contactmeani">
        See Video -&gt;
        </p>
            </div>
            <div id="video">
            {/* <img src={Video} height="100%" width="100%" /> */}
            <video  src = {video} width = "100%" height="100%" autoPlay controls />
            </div>
            </div>
           </div>
    )
}
export default Body;
