import { useLocation } from "react-router-dom";
import Global from "./style/global";
import Routes from "./routes";
import "./App.css";
import ButtonBack from "./components/Button/style";

function App() {
  let { pathname: location } = useLocation();

  return (
    <>
      <Global />
      <div className="NavBar">
        <h1>Kenzie Hub</h1>
        {location === "/register" && <ButtonBack to="/">Voltar</ButtonBack>}
      </div>
      <Routes />
    </>
  );
}

export default App;
