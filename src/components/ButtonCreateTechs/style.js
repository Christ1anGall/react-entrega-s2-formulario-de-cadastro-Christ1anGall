import styled from "styled-components";

const TechsMainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }
  button {
    background: var(--gray-3);
    color: var(--gray-0);
    border: transparent;
    border-radius: 4px;
    height: 2rem;
    width: 2rem;

    font-weight: 600;
    font-size: 22px;
    line-height: 18px;
  }
`;

export default TechsMainContainer;
