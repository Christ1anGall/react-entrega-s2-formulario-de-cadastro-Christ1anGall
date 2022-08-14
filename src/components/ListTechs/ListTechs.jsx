import LiContainer from "./style";

const ListTechs = () => {
  return (
    <LiContainer
      onClick={() => {
        console.log("eu?");
      }}
    >
      <h4>React JS</h4> <p>intermediario</p>
    </LiContainer>
  );
};
export default ListTechs;
