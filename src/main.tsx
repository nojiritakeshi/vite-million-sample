import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import { BtnBlock } from "./ChakraBtnBlock.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <App /> */}
      <Button>Button</Button>
      <BtnBlock />
    </ChakraProvider>
  </React.StrictMode>
);
