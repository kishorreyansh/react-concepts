function ChildrenProp({ children, color = "blue" }) {
  return (
    <div
      style={{
        color: color,
        border: "1px solid lightpink",
        width: "200px",
        margin: "5px",
      }}
    >
      <h3>{children}</h3>
    </div>
  );
}

export default ChildrenProp;
