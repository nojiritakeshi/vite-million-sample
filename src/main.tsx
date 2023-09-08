import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import { BtnBlock } from "./ChakraBtnBlock.tsx";

const theme = extendTheme({
  colors: {
    primary: "blue",
    secondary: "red",
    third: "green",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      {/* <Button color={"primary"} bg={"third"} name="BTN">
        Button
      </Button>
      <BtnBlock /> */}
    </ChakraProvider>
  </React.StrictMode>
);
