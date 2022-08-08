import { useNavigate } from "react-router-dom";
import HeaderMain from "./style";

const Header = () => {
  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("../login", { replace: true });
  };
  return (
    <HeaderMain>
      <h1>Kenzie Hub</h1>
      <button onClick={logout}>Sair</button>
    </HeaderMain>
  );
};

export default Header;
