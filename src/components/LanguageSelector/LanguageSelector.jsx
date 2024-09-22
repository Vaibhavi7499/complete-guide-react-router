import React from "react";
import "./LanguageSelector.css";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
//   console.log(i18n);
  const languages = [
    {
      code: "en",
      lang: "English",
    },
    {
      code: "ma",
      lang: "Marathi",
    },
    {
      code: "hi",
      lang: "Hindi",
    },
  ];

  function Language(code) {
    i18n.changeLanguage(code);
  }

  return (
    <div className="container">
      {languages.map((e) => {
        return (
          <button
            className={i18n.language === e?.code ? "selected" : ""}
            key={e?.code}
            onClick={() => Language(e?.code)}
          >
            {e?.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
