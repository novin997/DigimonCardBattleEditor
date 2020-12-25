import React, { useEffect } from "react";
import { GiHealthNormal } from "react-icons/gi";
import "./App.scss";
import { message, Button } from "antd";

const { ipcRenderer } = window.require("electron");

function App() {
  const chooseFile = () => {
    ipcRenderer.send("open-file-dialog");
  };

  useEffect(() => {
    ipcRenderer.on("selected-file", (event, path) => {
      console.log(path);
    });
    return () => {};
  }, []);

  return (
    <div className="App">
      <h1>Digimon Card Battle Editor</h1>
      <Button onClick={chooseFile} type="primary">
        Select File
      </Button>
      <GiHealthNormal />
    </div>
  );
}

export default App;
