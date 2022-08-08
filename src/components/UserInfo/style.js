import styled from "styled-components";

const UserContainer = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--gray-3);
  height: 11rem;
  align-items: center;
  padding: 0 21rem;

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--gray-1);
  }
`;
export default UserContainer;
