import React ,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UncontrolledAccordion,AccordionItem,AccordionHeader,AccordionBody, } from 'reactstrap';

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
    
<div>
  <UncontrolledAccordion defaultOpen="1">
    <AccordionItem>
      <AccordionHeader targetId="1">
          <strong>Lorem ?</strong>
        
      </AccordionHeader>
      <AccordionBody accordionId="1">     
     This is the first item's accordion body.  You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
    .accordion-body, though the transition does limit overflow.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="2">
      <strong>Lorem hsidhs ?</strong>
      </AccordionHeader>
      <AccordionBody accordionId="2">
        
          This is the second item's accordion body.
       
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        
          .accordion-body
        
        , though the transition does limit overflow.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="3">
      <strong>Lorem hsidhs ?</strong>
      </AccordionHeader>
      <AccordionBody accordionId="3">
        
          This is the third item's accordion body.
        
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        
          .accordion-body
        
        , though the transition does limit overflow.
      </AccordionBody>
    </AccordionItem>
  </UncontrolledAccordion>
</div>
    </div>
 
    
    
    </>
)


}
export default Faqs;