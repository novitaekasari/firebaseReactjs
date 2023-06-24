import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <CSSReset />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

export default App;
