import UserContainer from "./style";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const UserInfo = () => {
  const { user } = useContext(UserContext);
  return (
    <UserContainer>
      <h2>Olá, {user.name}</h2>
      <h3>{user.course_module}</h3>
    </UserContainer>
  );
};

export default UserInfo;
