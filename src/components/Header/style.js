import styled from "styled-components";

const HeaderMain = styled.nav`
  display: flex;
  border-bottom: 1px solid var(--gray-3);
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  button {
    background: var(--gray-3);
    border-radius: 4px;
    border: none;
    padding: 0.5rem 1rem;
    color: white;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    padding: 0 22%;
    justify-content: space-between;
  }
`;

export default HeaderMain;
