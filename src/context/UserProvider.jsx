import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/api";

export const UserContext = createContext({});

const Provider = ({ children }) => {
  let navigate = useNavigate();

  const [user, setUser] = useState({});

  const token = localStorage.getItem("@TOKEN");
  api.defaults.headers.authorization = `Bearer ${token}`;
  useEffect(() => {
    token
      ? api.get("/profile").then((res) => setUser(res.data))
      : navigate("../Login", { replace: true });
  }, [token]);

  const requestUser = async (data) => {
    await api
      .post("/sessions", data)
      .then((res) => {
        const notify = () =>
          toast.success(`Bem vindo ${res.data.user.name}!`, {
            theme: "dark",
          });
        setUser(res.data.user);
        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.user.id);
        notify();
        navigate("../Dashboard", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        const notify = () =>
          toast.error(`ops!! email ou senha não confere!`, {
            theme: "dark",
          });
        notify();
      });
  };

  const createUser = async (data) => {
    const { email, password, name, bio, contact, course_module } = data;

    const dataSend = {
      email,
      password,
      name,
      bio,
      contact,
      course_module,
    };

    api
      .post("/users", dataSend)
      .then((res) => {
        const notify = () =>
          toast.success("Conta criada com sucesso!", {
            theme: "dark",
          });
        localStorage.setItem("@USERID", res.data.user.id);
        notify();
        navigate("../login", { replace: true });
      })
      .catch((err) => {
        const notifyError = () =>
          toast.error(`Ops! ${err.response.data.message}`, {
            theme: "dark",
          });
        notifyError();
      });
  };

  return (
    <UserContext.Provider value={{ user, requestUser, createUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
