import styled from "styled-components";

const HeaderMain = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  border-bottom: 1px solid var(--gray-3);
  align-items: center;
  justify-content: space-around;
  gap: 20%;

  background: var(--gray-4);

  button {
    background: var(--gray-3);
    border-radius: 4px;
    border: none;
    padding: 0.5rem 1rem;
    color: white;
    button:hover {
      background: var(--gray-2);
    }

    &:hover {
      background: var(--gray-2);
    }
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }
`;

export default HeaderMain;
