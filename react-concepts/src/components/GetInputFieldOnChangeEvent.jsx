import { useState } from "react";

function GetInputFieldOnChangeEvent() {
  const [value, setValue] = useState("");
  return (
    <div>
      <h2>Get Input Field</h2>
      <input
        type="text"
        placeholder="Enter Text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <h3>{value}</h3>
      <button onClick={() => setValue("")}>Clear</button>
    </div>
  );
}

export default GetInputFieldOnChangeEvent;
