import React from "react";
import { useSetLang, useHT } from "./context";

export default () => {
  const setLang = useSetLang();
  const ht = useHT();

  return (
    <>
      <h1>{ht("Hello")}</h1>
      <button onClick={() => setLang("es")}>{ht("Translate")}</button>
    </>
  );
};
