import React ,{useState} from "react";
import Accordion from "../../component/Accordion/Accordion";
import  "./FAQs.css";
const Faqs =()=>{

return(
    <>
     
    <div className="header">
        <div className="head">
    <h1 >Frequently Asked Questions</h1>
    <p className="smallheader">Feel free to send us your qustions or comments below</p>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Accordion/>
    </div>
 
    
    
    </>
)


}
export default Faqs;