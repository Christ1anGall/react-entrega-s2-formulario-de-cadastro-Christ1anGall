import { useContext } from "react";
import { ModalProvider } from "../../context/ModalProvider";
import TechsMainContainer from "./style";

const ButtonCreateTechs = () => {
  const { isModalON, setModal, setTitle, setType } = useContext(ModalProvider);

  return (
    <TechsMainContainer className="ButtonCreateTechsContainer">
      <h4 className="title-Create">Tecnologias</h4>
      <button
        className="button-Create"
        onClick={() => {
          setTitle("Cadastrar Tecnologia");
          setType("create");
          setModal(!isModalON);
        }}
      >
        +
      </button>
    </TechsMainContainer>
  );
};

export default ButtonCreateTechs;
