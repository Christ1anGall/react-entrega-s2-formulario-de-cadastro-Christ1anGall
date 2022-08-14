import { createContext, useState } from "react";
import ModalContainer from "../components/Modal/style";

export const ModalProvider = createContext({});

const ModalContext = ({ children }) => {
  const [isModalON, setModal] = useState(false);
  const [type, setType] = useState("create");
  const [tittle, setTitle] = useState("Cadastrar Tecnologia");
  const [id, setId] = useState(0);
  const Modal = () => {
    return (
      <ModalContainer>
        <div className="Modal-Container">
          <div className="header-Modal">
            <h2>{tittle}</h2>
            <button
              onClick={() => {
                setModal(!isModalON);
              }}
            >
              X
            </button>
          </div>
          <div className="body-Modal">
            <form>
              <label>Nome do Projeto</label>
              <input type="text" placeholder="digite o nome" />
              <label>Status</label>
              <select name="Status" id="Status">
                <option value="Iniciante">Iniciante </option>
                <option value="Intermediário">Intermediário </option>
                <option value="Avançado">Avançado </option>
              </select>
              <div className="button-Container">
                {type === "create" ? (
                  <button className="button-Create button-Standart">
                    Cadastrar Tecnologia
                  </button>
                ) : (
                  <>
                    <button className="button-Edit button-Standart">
                      Salvar alterações
                    </button>
                    <button className="button-Delete button-Standart">
                      Excluir
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </ModalContainer>
    );
  };

  return (
    <ModalProvider.Provider
      value={{ isModalON, setModal, Modal, setType, setTitle, setId }}
    >
      {children}
    </ModalProvider.Provider>
  );
};

export default ModalContext;
