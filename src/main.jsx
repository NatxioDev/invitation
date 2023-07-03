import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Header from "./components/Header.jsx";
import Countdown from "./components/Countdown.jsx";
import Maps from "./components/Maps.jsx";
import Footer from "./components/Footer.jsx";
import Asistance from "./components/Asistance";
import Rules from "./components/Rules";
// const helmetContext = {};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <Countdown />
        <br />
        <Maps />
        <br />

        <hr></hr>
        <br />
        <Rules />

        <br />
        <Asistance />
        <br />
        <hr></hr>
        <Footer />
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);
