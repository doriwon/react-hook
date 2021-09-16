// 한 공간에 State들 정의
import React, { useState, useContext, createContext } from "react";

const LangContext = createContext();

const Lang = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState(defaultLang);
  const hyperTranslate = (text) => {
    if (lang === defaultLang) {
      return text;
    } else {
      return translations[lang][text];
    }
  };

  return (
    <LangContext.Provider
      value={{
        //State를 변경하기 위해 value와 function 전송
        setLang,
        ht: hyperTranslate,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

export const useSetLang = (lang) => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export const useHT = () => {
  const { ht } = useContext(LangContext);
  return ht;
};

export default Lang;
