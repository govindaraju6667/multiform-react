import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserValues } from "../Features/UserSlice";

export const Page3 = ({ setPage }) => {
  const Selector = useSelector((state) => state.user.value);
  console.log(Selector);
  const [challenge, setChallenge] = useState(Selector);

  const dispatch = useDispatch();

  dispatch(UserValues(challenge));
  console.log(challenge);

  function handleBack() {
    setPage(2);
  }

  function handleNext() {
    setPage(4);
  }
  return (
    <div className="page3">
      <div id="check-head">
        <h2>Challenge Preference</h2>
        <p>
          Please tell us which frontend Challenges you would like to paricipate
          in.
        </p>
      </div>
      <div id="check-box">
        <div
          id="check"
          style={
            challenge.HtmlCssJs
              ? { border: "2px solid rgb(229,149,0)" }
              : { backgroundColor: "" }
          }
        >
          <input
            type="checkbox"
            value={challenge.HtmlCssJs}
            onClick={() => setChallenge({ ...challenge, HtmlCssJs: true })}
          ></input>
          <p>HTML/JS/CSS</p>
        </div>

        <div
          id="check"
          style={
            challenge.ReactJs
              ? { border: "2px solid rgb(229,149,0)" }
              : { backgroundColor: "" }
          }
        >
          <input
            type="checkbox"
            value={challenge.ReactJs}
            onClick={() => setChallenge({ ...challenge, ReactJs: true })}
          ></input>
          <p>React.Js</p>
        </div>

        <div
          id="check"
          style={
            challenge.AngularJs
              ? { border: "2px solid rgb(229,149,0)" }
              : { backgroundColor: "" }
          }
        >
          <input
            type="checkbox"
            value={challenge.AngularJs}
            onClick={() => setChallenge({ ...challenge, AngularJs: true })}
          ></input>
          <p>Angular.Js</p>
        </div>

        <div
          id="check"
          style={
            challenge.VueJs
              ? { border: "2px solid rgb(229,149,0)" }
              : { backgroundColor: "" }
          }
        >
          <input
            type="checkbox"
            value={challenge.VueJs}
            onClick={() => setChallenge({ ...challenge, VueJs: true })}
          ></input>
          <p>Vue.Js</p>
        </div>
      </div>
      <div id="btns">
        <button id="goback" onClick={handleBack}>
          Go Back
        </button>
        <button id="next-step" onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
};
