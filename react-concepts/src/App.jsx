import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import JSXExercise from "./components/JSX/JSXExercise";
import ToggleHideShow from "./components/ToggleHide/ToggleHideShow";
import MultipleConditions from "./components/MultipleConditions";
import PropsExample from "./components/PropsExample";
import PropsArray from "./components/PropsArrays";
import PropsButtonClick from "./components/PropsButtonClick";
import DefaultProps from "./components/DefaultProps";
import ChildrenProp from "./components/ChildrenProp";
import GetInputFieldOnChangeEvent from "./components/GetInputFieldOnChangeEvent";

function App() {
  let profession = "IPS";
  let ridhaObject = {
    name: "Ridhansh",
    profession: "Doctor",
    country: "India",
  };
  let ridhaObject1 = {
    name: "Reyansh",
    profession: "IPS",
    country: "India",
  };

  let movies = ["Salaar", "Kalki", "Bahubali"];

  const [boy, setBoy] = useState("");
  return (
    <>
      <h1>React Concepts</h1>
      <JSXExercise />
      <ToggleHideShow />
      <MultipleConditions />
      {/* <PropsExample name="Reyansh" profession={profession} /> */}
      <PropsExample ridhaObj={ridhaObject} />
      <PropsExample ridhaObj={ridhaObject1} />

      <PropsArray movie={movies[0]} />

      {boy && <PropsButtonClick name={boy} />}
      <button onClick={() => setBoy("Reyansh")}>Update Name</button>
      <hr />
      <DefaultProps name="Reyansh" />
      <DefaultProps />

      <hr />
      <ChildrenProp>
        <h3>Hello, Salaar</h3>
      </ChildrenProp>
      <ChildrenProp color="violet">
        <h3>Hello, Kalki</h3>
      </ChildrenProp>

      <hr />
      <GetInputFieldOnChangeEvent />
    </>
  );
}

export default App;
