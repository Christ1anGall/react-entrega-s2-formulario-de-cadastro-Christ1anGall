import { useLocation } from "react-router-dom";
import Global from "./style/global";
import Routes from "./routes";
import "./App.css";
import ButtonBack from "./components/Button/style";
import { ToastContainer } from "react-toastify";

function App() {
  let { pathname: location } = useLocation();

  return (
    <>
      <Global />
      {location.toLowerCase() !== "/dashboard" && (
        <div className="NavBar">
          <h1>Kenzie Hub</h1>
          {location === "/register" && <ButtonBack to="/">Voltar</ButtonBack>}
        </div>
      )}
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
