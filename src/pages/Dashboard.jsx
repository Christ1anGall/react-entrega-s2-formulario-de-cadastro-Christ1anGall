import Body from "../components/Body/Body";
import Header from "../components/Header/Header";
import UserInfo from "../components/UserInfo/UserInfo";

const Dashboard = ({ user }) => {
  return (
    <>
      <Header />
      <UserInfo user={user} />
      <Body />
    </>
  );
};

export default Dashboard;
