import react from "react";
import Accordion from "../../component/Accordion/Accordion";
import FAQscss from "./FAQs.module.css";
const Faqs = () => {
  return (
    <>
      <div className={FAQscss.header}>
        <div className={FAQscss.head}>
          <h1 className={FAQscss.h1}>Frequently Asked Questions</h1>
          <p className={FAQscss.smallheader}>
            Feel free to send us your qustions or comments below
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Accordion />
      </div>
    </>
  );
};
export default Faqs;
