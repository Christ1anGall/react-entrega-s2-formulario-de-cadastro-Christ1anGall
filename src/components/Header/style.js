import styled from "styled-components";

const HeaderMain = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray-3);
  padding: 0 21rem;

  button {
    background: var(--gray-3);
    border-radius: 4px;
    border: none;
    padding: 0.5rem 1rem;
    color: white;
  }
`;

export default HeaderMain;
