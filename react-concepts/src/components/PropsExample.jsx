//function PropsExample(props) {
function PropsExample({ ridhaObj }) {
  return (
    <div>
      <hr />
      <h3>
        Name is {ridhaObj.name} {ridhaObj.profession} {ridhaObj.country}
      </h3>
    </div>
  );
}

export default PropsExample;
