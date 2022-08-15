import { UserContext } from "../../context/UserProvider";
import ButtonCreateTechs from "../ButtonCreateTechs";
import ListTechs from "../ListTechs/ListTechs";
import BodyContainer from "./style";
import { useContext, useEffect } from "react";
import { ModalProvider } from "../../context/ModalProvider";
import api from "../../api/api";
import { useState } from "react";

const Body = () => {
  const { user } = useContext(UserContext);
  const { isModalON } = useContext(ModalProvider);

  const [techs, setTechs] = useState([]);

  useEffect(() => {
    api.get(`/users/${user.id}`).then((res) => {
      setTechs(res.data.techs);
    });
    return () => {
      api.get(`/users/${user.id}`).then((res) => {
        setTechs(res.data.techs);
      });
    };
  }, [user]);

  useEffect(() => {
    api.get(`/users/${user.id}`).then((res) => {
      setTechs(res.data.techs);
    });
    return () => {
      api.get(`/users/${user.id}`).then((res) => {
        setTechs(res.data.techs);
      });
    };
  }, [isModalON]);

  return (
    <BodyContainer>
      <ButtonCreateTechs />
      <ul>
        {techs.map((tech) => {
          return (
            <ListTechs
              key={tech.id}
              id={tech.id}
              title={tech.title}
              status={tech.status}
            />
          );
        })}
      </ul>
    </BodyContainer>
  );
};

export default Body;
