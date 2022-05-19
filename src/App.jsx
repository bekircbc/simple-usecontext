import "./App.css";
import { PageChild } from "../components/PageChild";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function App() {
  const { title } = useContext(AppContext);
  return (
    <div className="App">
      <h1>{title}</h1>
      <PageChild />
    </div>
  );
}

export default App;
