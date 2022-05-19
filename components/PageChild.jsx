import { useContext } from "react";
import { AppContext } from "../AppContext";

export function PageChild() {
  const { title } = useContext(AppContext);

  return <h1>{title}</h1>;
}
