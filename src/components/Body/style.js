import styled from "styled-components";

const BodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1.2rem;
  color: var(--color-text);

  ul {
    background: var(--gray-3);
    height: 100px;
    border-radius: 4px;
    padding: 0;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: column;
    padding: 0 22%;
  }
`;

export default BodyContainer;
