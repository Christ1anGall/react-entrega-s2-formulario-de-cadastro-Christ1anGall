import ButtonCreateTechs from "../ButtonCreateTechs";
import ListTechs from "../ListTechs/ListTechs";
import BodyContainer from "./style";

const Body = () => {
  return (
    <BodyContainer>
      <ButtonCreateTechs />
      <ul>
        <ListTechs />
      </ul>
    </BodyContainer>
  );
};

export default Body;
