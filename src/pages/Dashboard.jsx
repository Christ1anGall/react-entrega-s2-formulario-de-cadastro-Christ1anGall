import { useContext } from "react";
import Body from "../components/Body/Body";
import Header from "../components/Header/Header";
import UserInfo from "../components/UserInfo/UserInfo";
import { ModalProvider } from "../context/ModalProvider";

const Dashboard = () => {
  const { isModalON, Modal } = useContext(ModalProvider);

  return (
    <>
      {isModalON && <Modal />}
      <Header />
      <UserInfo />
      <Body />
    </>
  );
};

export default Dashboard;
