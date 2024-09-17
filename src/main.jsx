import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalContainer from "./contexts/GlobalContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NameContainer from "./contexts/NameContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer autoClose={1500} />
      <GlobalContainer>
        <NameContainer>
          <App />
        </NameContainer>
      </GlobalContainer>
    </BrowserRouter>
  </StrictMode>
);
