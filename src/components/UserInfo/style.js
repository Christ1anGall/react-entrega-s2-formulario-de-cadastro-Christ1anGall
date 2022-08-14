import styled from "styled-components";

const UserContainer = styled.div`
  color: white;
  display: flex;
  border-bottom: 2px solid var(--gray-3);
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 4rem;
  padding-top: 6rem;
  gap: 12px;

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin: 0;
  }
  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--gray-1);
    margin: 0;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    padding: 0 23%;
    padding-top: 10vh;
    justify-content: space-between;
    height: 8rem;
    align-items: center;
  }
`;
export default UserContainer;
