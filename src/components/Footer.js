    import React from "react";
    import bounteous from "../images/bounteous2.svg"
            import "../styles/main.css"
            function Footer(){
                return(
                    <div id="footer"> 
                    <div style={{paddingLeft:'20%',paddingRight:'20%',paddingTop:'5%'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.026149409996!2d80.24193051423256!3d12.970178518420193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6d9eb3dbc5%3A0x8b7737d1feb6fa3!2sBounteous%20(India)!5e0!3m2!1sen!2sin!4v1671812359706!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div id = "footerback">
            <span id="rightss" className="hideone" style={{marginRight:'8px'}}>Bounteous 2022 All rights reserved</span>
                <p id="powered" style={{marginLeft:'10px'}}>Powered by <img style ={{marginTop:'12px',marginLeft:'3px'}} src={bounteous} height="88px" width="88px"/> </p>
                
                <p id = "footerlinks" style={{paddingTop:'0px',marginLeft:'10px'}}>
                <a href = "https://www.instagram.com/thisisbounteous/?hl=en" > <i className="fa fa-instagram"></i> &nbsp;</a>
                <a href = "https://www.facebook.com/thisisbounteous/"><i className="fa fa-facebook"></i>&nbsp;&nbsp;</a>
                <a href = "https://twitter.com/Bounteous"><i className="fa fa-twitter"></i>&nbsp;&nbsp;</a>
                <a href = "https://www.linkedin.com/company/bounteous/jobs?trk=nav_type_jobs"><i className="fa fa-linkedin"></i>&nbsp;</a>
                <span style={{textAlign:'end',float:'right',fontSize:'15px',marginRight:'8px'}} className="lasthide">Terms &nbsp; Privacy &nbsp; About</span>
                </p>
                <span id="tpa" className="hids lasthid" style={{color:'white',paddingTop:'0px',marginRight:'10px'}}>Terms &nbsp; Privacy &nbsp; About</span> 
                <span id="rights" className="hide text-lg" style={{fontSize:'15px',marginLeft:'10px'}}>Bounteous 2022 All rights reserved</span> 
                <br></br>
                </div>
            </div> 
                
                )
            }
            
            export default Footer;
            
            