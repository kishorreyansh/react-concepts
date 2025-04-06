function JSXExercise() {
  function handleClick() {
    alert("Click Me !!");
  }
  return (
    <div>
      <h1>Kishor Todos</h1>
      <img
        src="https://static.toiimg.com/photo/72975551.cms"
        alt="kishor"
        className="photo"
        style={{ width: "300px", height: "auto" }}
      />
      <ul>
        <li>Learn React with Examples</li>
        <li>Pratice with Examples</li>
        <li>Revise Daily</li>
      </ul>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default JSXExercise;
