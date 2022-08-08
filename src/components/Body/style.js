import styled from "styled-components";

const BodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  color: var(--color-text);

  h5 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--gray-0);
  }
  @media only screen and (min-width: 600px) {
    flex-direction: column;
    padding: 0 22%;
    justify-content: space-between;
  }
`;

export default BodyContainer;
