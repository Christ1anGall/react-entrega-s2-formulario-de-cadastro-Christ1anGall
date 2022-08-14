import ButtonCreateTechs from "../ButtonCreateTechs";
import ListTechs from "../ListTechs/ListTechs";
import BodyContainer from "./style";

const Body = () => {
  return (
    <BodyContainer>
      <ButtonCreateTechs />
      <ul>
        {/* user.techs.map((value)=>{
return <ListTechs id={value.id} />;
        }) */}
        <ListTechs id={"1"} />
        <ListTechs id={"2"} />
        <ListTechs id={"3"} />
        <ListTechs id={"11"} />
        <ListTechs id={"22"} />
        <ListTechs id={"33"} />
      </ul>
    </BodyContainer>
  );
};

export default Body;
