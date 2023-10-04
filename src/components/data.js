import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userValues } from "./features/userSlice";

function Page_3() {
  const Selector = useSelector((state) => state.user.value);
  console.log(Selector);
  const [challenge, setChallenge] = useState(Selector);

  const dispatch = useDispatch();

  // useEffect(()=>{

  // })

  dispatch(userValues(challenge));

  console.log(challenge);

  return (
    <div className="preference-box">
      <div>
        <h3 className="page_3_heading">Challenge Preference </h3>
        <p className="content_3">
          Please tell us which frontend challeneges you would like to
          participate in.
        </p>
        <div className="box-3">
          <div
            className="pref_1"
            style={
              challenge.HtmlCssJs
                ? { border: "2px solid rgb(229, 149, 0)" }
                : { backgroundColor: "" }
            }
          >
            <input
              className="input_fields_3"
              type="checkbox"
              value={challenge.HtmlCssJs}
              onClick={() => setChallenge({ ...challenge, HtmlCssJs: true })}
            />
            <p>Html/CSS/Js</p>
          </div>
          <div className="pref_1">
            <input
              type="checkbox"
              value={challenge.ReactJs}
              onClick={() => setChallenge({ ...challenge, ReactJs: true })}
            />
            <p>React Js</p>
          </div>
          <div className="pref_1">
            <input
              type="checkbox"
              value={challenge.AngularJs}
              onClick={() => setChallenge({ ...challenge, AngularJs: true })}
            />
            <p>Angular Js</p>
          </div>
          <div className="pref_1">
            <input
              type="checkbox"
              value={challenge.VueJs}
              onClick={() => setChallenge({ ...challenge, VueJs: true })}
            />
            <p>Vue.Js</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page_3;
