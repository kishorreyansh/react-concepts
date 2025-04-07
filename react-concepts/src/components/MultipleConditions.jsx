import { useState } from "react";

function MultipleConditions() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Multiple Conditions in React JS</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      {count == 0 ? (
        <h3>Condition 0 </h3>
      ) : count == 1 ? (
        <h3>Condition 1 </h3>
      ) : count == 2 ? (
        <h3>Condition 2 </h3>
      ) : count == 3 ? (
        <h3>Condition 3 </h3>
      ) : count == 4 ? (
        <h3>Condition 4 </h3>
      ) : (
        <h3>Other Condition</h3>
      )}
    </div>
  );
}

export default MultipleConditions;
