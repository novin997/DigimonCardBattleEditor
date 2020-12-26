import React, { useEffect, useState } from "react";
import { GiHealthNormal } from "react-icons/gi";
import "./App.scss";
import { message, Button } from "antd";

const { ipcRenderer } = window.require("electron");

function App() {
  const [file, setFile] = useState<string>("");

  const chooseFile = () => {
    ipcRenderer.send("open-file-dialog");
  };

  useEffect(() => {
    ipcRenderer.on("selected-file", (event, path) => {
      setFile(path.filePaths[0]);
    });
    return () => {};
  }, []);

  return (
    <div className="App">
      <h1>Digimon Card Battle Editor</h1>
      <Button onClick={chooseFile} type="primary">
        Select File
      </Button>
      <h4>{file}</h4>
      <GiHealthNormal />
    </div>
  );
}

export default App;
