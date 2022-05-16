import React ,{useState} from "react";
const Faqs =()=>{
const questions=[{question:"lorem?",answer:"jscc wslii wshcd ieedc jcfwd wcclo edkkec nojc"},{question:"hdv ldvn dlsvn",answer:"dvcl dsv sxdvdxv dv d;mjm peocd ecde"}]
const [show, setShow] = useState(false);
console.log(show)
return(
    <>
    <div className="header">
    <h1>Frequently Asked Questions</h1>
    <h3>Feel free to send us your qustions or comments below</h3>
    <hr></hr>
    </div>
    
    
    {  questions.map((element, index) => (
    <><div className="question">
            <h2>{element.question}</h2><p onClick={()=>{setShow(true)}}>+</p>
        </div><div>
        {show &&<p>{element.answer}</p>} 
<hr></hr>
            </div></>
            
        ))}
    </>
)


}
export default Faqs;