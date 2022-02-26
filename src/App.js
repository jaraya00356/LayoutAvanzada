import React from "react";
//import "./styles.css";
import Aside from "./Aside";
import "react-pro-sidebar/dist/css/styles.css";
import "./styles/App.scss";

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Aside />
    </div>
  );
}
