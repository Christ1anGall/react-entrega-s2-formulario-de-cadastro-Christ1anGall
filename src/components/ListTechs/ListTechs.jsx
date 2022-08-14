import { useContext } from "react";
import { ModalProvider } from "../../context/ModalProvider";
import LiContainer from "./style";

const ListTechs = ({ id }) => {
  const { isModalON, setModal, setTitle, setType, setId } =
    useContext(ModalProvider);

  return (
    <LiContainer
      onClick={() => {
        setTitle("Editar Tecnologia");
        setType("edit");
        setModal(!isModalON);
        setId(id);
      }}
    >
      <h4>React JS</h4> <p>intermediario</p>
    </LiContainer>
  );
};
export default ListTechs;
