import React ,{useState} from "react";
import profilepic from "../images/logo.jpg"
import Profileabout from "../components/Profileabout"
function Profile(){
  const [email , setemail] = useState(''); 
  const subscribe = () => {
    let length = 0;
    length = email.length;
    if(email.length > 6 && email.includes("@") && email.includes(".")){
      alert("successfully subscribed");
    }
    else{
      alert("invalid email");
    }
  }
    return(
    
<div id="forwhiteborder">
        <div id="profile">
        <table style={{width:'100%'}}>
  <tr>
  <td  id="tdone" >
      <img src ={profilepic } />
      </td>
<td id="tdtwo">
  <div id="tdtwodiv">
    <p className="tagone"  style= {{width :'max-content'}} id="generalbuttons">web development</p>
    <p className="tagtwo" id="generalbuttons" style= {{width :'max-content'}}>E-commerce</p>

    </div>
    <div id = "tdtwodiv">
    <p  style= {{width :'max-content'}} className="tagone" id="generalbuttons">Artificial intelligence</p>
    </div>
<div className="togglediv">
<hr></hr>
    <span  className="pr-2 pl-2 ml-1 pb-2 pt-1" id="booktrail" id="generalbuttons">Book Trail</span>
    <span  className="pr-2 pl-2 ml-1 pb-2 pt-1 bigbuttons" id="contactmee" >Contact us</span>
    </div>
  </td>
  
  <td id="tdthree" >
        <div >
    <p  className="my-3 pt-2 bigbuttons">Careers</p>
    <p  className="pt-2 ptwo bigbuttons">Contact us</p>
    </div>
  </td>
  </tr>
  
  
</table>
<Profileabout />
<div id="subscribe" >
  <p className="text-lg" style={{fontSize:'20px'}}>Subscribe to get latest news about Bounteous.</p>
   <div class="form-group">
    
    <input 
    type="email" 
    id="emailinput" 
    value={email}
    onChange={(e)=>setemail(e.target.value )}
    placeholder="Enter your Email" />
    <input type="submit" class=" btn ml-4" id="subscribebtn" onClick = {subscribe}value="Subscribe" />
    
  </div>
</div>
            </div>
        
            </div>
          
          
    )
}

export default Profile;
