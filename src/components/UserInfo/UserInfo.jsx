import UserContainer from "./style";

const UserInfo = ({ user }) => {
  return (
    <UserContainer>
      <h2>Olá, {user.name}</h2>
      <h3>{user.course_module}</h3>
    </UserContainer>
  );
};

export default UserInfo;
