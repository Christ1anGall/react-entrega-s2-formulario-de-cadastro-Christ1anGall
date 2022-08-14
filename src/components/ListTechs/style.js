import styled from "styled-components";

const LiContainer = styled.li`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  background: var(--gray-4);
  margin: 1.5rem 0.5rem;
  padding: 0 0.5rem;
  border-radius: 5px;
  align-items: center;

  height: 3rem;

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
  }

  @media only screen and (min-width: 600px) {
    margin: 1.5rem;
  }
`;
export default LiContainer;
