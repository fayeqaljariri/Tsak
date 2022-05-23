import "bootstrap/dist/css/bootstrap.min.css";
import "./Accordion.css";
import {
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import React from "react";
import { Data } from "./data";

const Accordion = () => {
  return (
    <div className="qustion">
      <UncontrolledAccordion defaultOpen="1">
        <AccordionItem>
          {Data.map((elment, index) => {
            return (
              <>
                <AccordionHeader targetId={Number(index) + 1} className="khaled">
                  <strong>{elment.qustion}</strong>
                </AccordionHeader>
                <AccordionBody accordionId={index + 1}>
                  {elment.answer}
                </AccordionBody>
              </>
            );
          })}
        </AccordionItem>
      </UncontrolledAccordion>
    </div>
  );
};
export default Accordion;
