import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./components/App/App.jsx";
// import { langContext } from "./components/context/langContext.js";
import { LangProvider } from "./components/context/langContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LangProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LangProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
