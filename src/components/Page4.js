import React from "react";
import { useSelector } from "react-redux";

export const Page4 = ({ setPage }) => {
  function handleBack() {
    setPage(3);
  }
  function handleNext() {
    setPage(5);
  }
  const finalSelector = useSelector((state) => state.user.value);
  console.log(finalSelector);

  const keys = Object.keys(finalSelector).filter(
    (value) => finalSelector[value] === true
  );

  return (
    <div className="page4">
      <div id="head-4">
      <h2>Review and Conform</h2>
      <p>Please review your information to make sure everything is accurate.</p>
      </div>
      <div id="outdata">
        <div id="boxs">
          <label id="title">Fullname</label>
          <p id="para">{finalSelector.name}</p>
        </div>
        <div id="boxs">
          <label id="title">Email Address</label>
          <p id="para">{finalSelector.email}</p>
        </div>
        <div id="boxs">
          <label id="title">Phonenumber</label>
          <p id="para">{finalSelector.phone}</p>
        </div>
        <div id="boxs">
          <label id="title">Portfolio/Gitup Link</label>
          <p id="para">{finalSelector.portfolio}</p>
        </div>
        <div id="boxs">
          <label id="title">Skill Level</label>
          <p id="para">{finalSelector.skills}</p>
        </div>
        <div id="boxs">
          {/* <label id="title">Challenge Preference</label> */}
          {keys.map((item, index) => (
            <li id="para" key={index}>
              {item}
            </li>
          ))}
        </div>
      </div>

      <div id="btns">
        <button id="goback" onClick={handleBack}>
          Go Back
        </button>
        <button id="next-step" onClick={handleNext}>
          submit
        </button>
      </div>
    </div>
  );
};
