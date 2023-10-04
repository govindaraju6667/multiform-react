import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserValues } from "../Features/UserSlice";

const Page1 = ({ setPage }) => {
  const user = useSelector((state) => state.user.value);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
  });
  const dispatch = useDispatch();

  function handleNext() {
    console.log(data.name);
    setPage(2);
    dispatch(
      UserValues({
        ...user,
        name: data.name,
        email: data.email,
        phone: data.phone,
        portfolio: data.portfolio,
      })
    );
    console.log(user);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   dispatch(UserValues(data));
  // }

  return (
    <div className="page1">
      <div id="heading">
        <h2>Personal Information</h2>
        <p>
          Please provide your personal details so we can get to know you better.
        </p>
      </div>
      <form id="forms">
        <div>
          <label>Full Name</label>
          <br />
          <input
            type="text"
            placeholder="Entername"
            id="inputbox"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          ></input>
          <br />
        </div>
        <div>
          <label>Email Address</label> <br />
          <input
            type="text"
            placeholder="name@email.com"
            id="inputbox"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          ></input>
          <br />
        </div>
        <div>
          <label>Phone Number</label> <br />
          <input
            type="text"
            placeholder="+911234567890"
            id="inputbox"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          ></input>
          <br />
        </div>
        <div>
          <label>Portfolio/Gitup Link</label> <br />
          <input
            type="text"
            placeholder="+911234567890"
            id="inputbox"
            onChange={(e) => setData({ ...data, portfolio: e.target.value })}
          ></input>
          <br />
          {/* <div><p id="border"></p></div> */}
          <input
            type="submit"
            id="next-step"
            value="Next Step"
            onClick={handleNext}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Page1;
