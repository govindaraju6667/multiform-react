// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import Page1 from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { Page4 } from "./components/Page4";
import { Page5 } from "./components/Page5";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <Navbar />
      {page === 1 ? <Page1 setPage={setPage} /> : ""}
      {page === 2 ? <Page2 setPage={setPage} /> : ""}
      {page === 3 ? <Page3 setPage={setPage} /> : ""}
      {page === 4 ? <Page4 setPage={setPage} /> : ""}
      {page === 5 ? <Page5 setPage={setPage} /> : ""}
    </div>
  );
}

export default App;
