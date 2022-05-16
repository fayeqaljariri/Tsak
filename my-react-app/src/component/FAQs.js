import React ,{useState} from "react";
import  "./FAQs.css";
const Faqs =()=>{
const questions=[{question:"lorem?",answer:"jscc wslii wshcd ieedc jcfwd wcclo edkkec nojc"},{question:"hdv ldvn dlsvn",answer:"dvcl dsv sxdvdxv dv d;mjm peocd ecde"}]
const [show, setShow] = useState(false);

const [show2, setShow2] = useState(false);

const [show3, setShow3] = useState(false);
const [show4, setShow4] = useState(false);
const [show5, setShow5] = useState(false);


return(
    <>
     
    <div className="header">
    <h1>Frequently Asked Questions</h1>
    <h3>Feel free to send us your qustions or comments below</h3>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr></hr>
    <div className="question">
            <h2>lorem?</h2>
            {!show ? <p className="show" onClick={()=>{setShow(true)}}>+</p>:<p className="show" onClick={()=>{setShow(false)}}>x</p>}
        </div><div>
        {show &&<p className="answer">"jscc wslii wshcd ieedc jcfwd wcclo edkkec nojc"</p>} 
<hr></hr>
    </div>
    <div className="question">
            <h2>dqd bshswln swcnm?</h2>
            {!show2 ? <p className="show" onClick={()=>{setShow2(true)}}>+</p>:<p className="show" onClick={()=>{setShow2(false)}}>x</p>}
        </div><div>
        {show2 &&<p className="answer">ksqs mwdei qadb </p>} 
<hr></hr>
    </div>
    <div className="question">
            <h2>slwdn rew pkws ?</h2>
            {!show3 ? <p className="show" onClick={()=>{setShow3(true)}}>+</p>:<p className="show" onClick={()=>{setShow3(false)}}>x</p>}
        </div><div>
        {show3 &&<p className="answer">hdv ldvn dlsvn</p>} 
<hr></hr>
    </div>
    <div className="question">
            <h2>jkls fkop wdkd ?</h2>
            {!show4 ? <p className="show" onClick={()=>{setShow4(true)}}>+</p>:<p className="show" onClick={()=>{setShow4(false)}}>x</p>}
        </div><div>
        {show4 &&<p className="answer">lorem ipsum swefe ssssds wdsp </p>}
<hr></hr>
    </div>
    <div className="question">
            <h2>lorem ipsum swefe sss?</h2>
            {!show5 ? <p className="show" onClick={()=>{setShow5(true)}}>+</p>:<p className="show" onClick={()=>{setShow5(false)}}>x</p>}
        </div><div>
        {show5 &&<p className="answer">hdv ldvn dlsvn</p>} 
<hr></hr>
    </div>
    </div>
 
    
    
    </>
)


}
export default Faqs;