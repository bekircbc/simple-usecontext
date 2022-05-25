import "./App.scss";
import { PageChild } from "../components/PageChild";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function App() {
  const { title } = useContext(AppContext);
  return (
    <div className="App">
      <div className="title">
        <img src="images/icon.png" alt="logo" />
        <h1>{title}</h1>
      </div>
      <PageChild />
    </div>
  );
}

export default App;
