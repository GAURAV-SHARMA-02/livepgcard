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
        <div className="desktop_next">
          <b className="next_ques">Where will I get the gift card?</b>
          <div className="items">
            <img className="flogo" src={Whatsapp} alt="whatsapp logo" />
            <span className="next_line">
              You will receive it on Whatsapp / Sms
              <span className="next_childline">on your mobile.</span>
            </span>
          </div>
          <br />
        </div>
        <div className="desktop_next">
          <b className="next_ques">When will I receive the gift card?</b>
          <div className="items">
            <img className="flogo" src={Note} alt="note logo" />
            <span className="next_line">
              Within 48 hours, when your Man
              <span className="next_childline">
                Matters order is delivered.
              </span>
            </span>
            <br />
          </div>
        </div>
        <div className="desktop_next">
          <b className="next_ques">What if I cancel the order?</b>
          <div className="items">
            <img className="flogo" src={Cross} alt="cross logo" />
            <span className="next_line">
              The voucher will not delivered if you
              <span className="next_childline">cancel the order.</span>
            </span>
          </div>
        </div>

        <center>
          <div className="desktop__next">
            <b className="next_ques">Where will I get the gift card?</b>
            <div className="items">
              <img className="flogo" src={Whatsapp} alt="whatsapp logo" />
              <span className="next_line">
                You will receive it on Whatsapp / Sms on your mobile.
              </span>
              <br />
              <br />
            </div>
          </div>
          <div className="desktop__next">
            <b className="next_ques">When will I receive the gift card?</b>
            <div className="items">
              <img className="flogo" src={Note} alt="note logo" />
              <span className="next_line">
                Within 48 hours, when your Man Matters order is delivered.
              </span>
              <br />
              <br />
            </div>
          </div>
          <div className="desktop__next">
            <b className="next_ques">What if I cancel the order?</b>
            <div className="items">
              <img className="flogo" src={Cross} alt="cross logo" />
              <span className="next_line">
                The voucher will not delivered if you cancel the order.
              </span>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
export default Next;
