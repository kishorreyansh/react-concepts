import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import JSXExercise from "./components/JSX/JSXExercise";
import ToggleHideShow from "./components/ToggleHide/ToggleHideShow";
import MultipleConditions from "./components/MultipleConditions";

function App() {
  return (
    <>
      <h1>React Concepts</h1>
      <JSXExercise />
      <ToggleHideShow />
      <MultipleConditions />
    </>
  );
}

export default App;
