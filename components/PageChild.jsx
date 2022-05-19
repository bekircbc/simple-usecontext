import { useContext } from "react";
import { AppContext } from "../src/AppContext";

export function PageChild() {
  const { pageChildTitle } = useContext(AppContext);

  return <h2>{pageChildTitle}</h2>;
}
