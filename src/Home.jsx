import React, { useEffect, useState } from "react";
import Main from "./Main";
import { useHistory } from "react-router-dom";

const Home = () => {
  let [state, setState] = useState({
    input: {},
  });
  let[cls,setCls]=useState({});
  let[bttnn1,setbttnn1]=useState({});
  let history = useHistory();
  let num = localStorage.getItem("phone");

  useEffect(() => {
    // console.log(num);

    if (num === undefined || num === null) {
    } else {
      history.push("/Next");
    }
  }, [num]);

  const handleChange = (event) => {
    let input = state.input;
    input[event.target.name] = event.target.value;
    setState({ input });
    setCls({display:"none"});
    setbttnn1({opacity:"1"});
  };
  const handleSubmit = (event) => {
    // event.preventDefault();
    if (validate()) {
      //   console.log(this.state);
      let input = {};
      input["phone"] = "";
      setState({ input: input });
      localStorage.setItem("phone", JSON.stringify(state.input));
    }
  };
  const validate = () => {
    let input = state.input;
    let isValid = true;
    if (!input["phone"]) {
      isValid = false;
    }
    if (typeof input["phone"] !== "undefined") {
      let pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["phone"])) {
        setCls({display:"visible"});
        isValid = false;
      } else if (input["phone"].length !== 10) {
        isValid = false;
      }
    }
    return isValid;
  };

  return (
    <>
      <Main />
      <div className="upper">
        You have Won paytm Gift <br /> Card of Rs 200 for{" "}
        <b>
          placing the order <br /> on Man Matters
        </b>
      </div>
      <div className="fhome">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              value={state.input.phone}
              onChange={handleChange}
              className="bttn1"
              style={bttnn1}
              placeholder="Enter Mobile Number"
              id="email"
            />
            <div className="{cls} txt" style={cls}>
              Enter the same number used on Man Matters.
            </div>
          </div>

          <input
            type="submit"
            value="Wow! Get my Paytm Gift Card   > "
            className="bttn btn btn-primary"
          />
        </form>
      </div>
    </>
  );
};

export default Home;
