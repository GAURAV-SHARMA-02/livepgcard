import React from "react";
import Main from "../Main";
import Whatsapp from "./whatsapp/whatsapp.JPG";
import Cross from "./cross/cross.JPG";
import Note from "./note/note.JPG";


const Next = () => { 
  return (
    <> 
      <Main /> 
      <div className="next">
        <b className="next_ques">Where will I get the gift card?</b>
        <div className="items">
          <img className="flogo" src={Whatsapp} alt="whatsapp logo" />
          <span className="next_line">You will receive it on Whatsapp/Sms <br/><span className="next_childline">on your mobile.</span> </span><br/><br/>
        </div>
        <b className="next_ques">When will I receive the gift card?</b>
        <div className="items">
          <img className="flogo" src={Note} alt="note logo" />
          Within 48 hours, when your Man<br/><span className="next_childline">Matters order is delivered.</span> <br/><br/>
        </div>
        <b className="next_ques">What if I cancel the order?</b>
        <div className="items">
          <img className="flogo" src={Cross} alt="cross logo" />
          The voucher will not delivered if you <br/><span className="next_childline">cancel the order.</span>
        </div>
      </div>
    </>
  );
};
export default Next;
