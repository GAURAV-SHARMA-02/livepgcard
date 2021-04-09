import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import paytm from "./paytmlogo/paytmg.JPG";
import gokwik from "./footer/gokwik.JPG";
 
const Main = () => {
  return (
    <>
      <div className="main">
        <span className="txt1">man</span>
        <p className="txt2">matters</p>
        <span className="super txt3">Congratulations</span> 🥳
        <div className="card fcard" style={{ width: "20rem" }}>
          <img className="paytmg" src={paytm} alt="paytm logo" />
        </div>
      </div>

      <footer className="footer">
        Poweredby <img className="gokwik" src={gokwik} alt="gokwik" />
      </footer>
    </>
  );
};

export default Main;
