import { useState } from "react";

function ToggleHideShow() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <h1>Toggle or Hide or Show</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      <br />
      {display ? <h3> Reyansh</h3> : <h3>No User</h3>}
    </div>
  );
}

export default ToggleHideShow;
