import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    // lng: "ma",
    fallbackLng: "en",
    returnObjects: true,
    // resources: {
    // en: {
    //   translation: {
    //     greeting: "Hello John",
    //     intro:"My name is John. I am from US.",
    //     description:{
    //       line1:"You are watching ABP news channel."
    //     }
    //   },
    // },
    // hi: {
    //   translation: {
    //     greeting: "नमस्ते जॉन",
    //     intro:"मेरा नाम जॉन है. मैं अमेरिका से हूं",
    //     description:{
    //       line1:"आप एबीपी न्यूज़ चैनल देख रहे हैं"
    //     }
    //   },
    // },

    // ma:{
    //   translation:{
    //     greeting:"नमस्कार जॉन",
    //     intro:"माझे नाव जॉन आहे. मी अमेरिकेचा आहे",
    //     description:{
    //       line1:"तुम्ही एबीपी न्यूज चॅनल पाहत आहात"
    //     }
    //   }
    // }
    // },
  });
