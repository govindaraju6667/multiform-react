import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserValues } from "../Features/UserSlice";

export const Page2 = ({ setPage }) => {
  const Selector = useSelector((state) => state.user.value);
  console.log(Selector);
  const [skillData, setSkillData] = useState(Selector);
  const dispatchSkills = useDispatch();

  useEffect(() => {
    dispatchSkills(UserValues(skillData));
  }, [skillData]);

  // console.log(skillData);
  // console.log(skillData.skills);

  function handleSelect(e) {
    e.preventDefault();
    setSkillData({ ...skillData, skills: e.target.className });
  }

  function handleNext() {
    setPage(3);
  }
  function handleBack() {
    setPage(1);
  }

  return (
    <div className="page2">
      <h2>Skill Level</h2>
      <p>Please tell us about you skill level in frontend development.</p>
      <div id="box">
        <div className="level" onClick={handleSelect}>
          <p id="select" className="begineer" value="hello">
            Beginner
          </p>
        </div>
        <div className="level" onClick={handleSelect}>
          <p id="select" className="Intermediate">
            Intermediate
          </p>
        </div>
        <div className="level" onClick={handleSelect}>
          <p id="select" className="Advanced">
            Advanced
          </p>
        </div>
        <div className="level" onClick={handleSelect}>
          <p id="select" className="Expert">
            Expert
          </p>
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
