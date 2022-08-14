import TechsMainContainer from "./style";

/* import { UserContext } from "../../context/UserProvider";
const { user } = useContext(UserContext); */

const ButtonCreateTechs = () => {
  return (
    <TechsMainContainer className="ButtonCreateTechsContainer">
      <h4>Tecnologias</h4>
      <button>+</button>
    </TechsMainContainer>
  );
};

export default ButtonCreateTechs;
