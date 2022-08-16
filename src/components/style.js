import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormMain = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  color: white;
  width: 17rem;
  padding: 3rem 0rem 2.5rem 1rem;
  background: var(--gray-3);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  margin: 0 auto;

  .errorDiv {
    display: flex;

    svg {
      top: 15px;
      color: red;
      position: relative;
      left: -25px;
      height: 100%;
    }
    span {
      display: none;
      position: absolute;
      background-color: #f10;
      padding: 4px 15px;
      border-radius: 3px;
      width: 5.6rem;
      margin-left: 9.5rem;
      margin-top: -50px;
      text-align: center;
      &::before {
        content: "";
        border-style: solid;
        border-width: 10px 7px 0 7px;
        transform: rotate(0deg);
        border-color: #f10 transparent;
        position: absolute;
        top: 45px;
        left: 0px;
      }
    }
    &:hover {
      span {
        display: flex;
      }
    }
  }

  label {
    font-weight: 400;
    font-size: 9.772px;
    line-height: 0px;
    margin-bottom: 1rem;
  }
  h1 {
    font-weight: 700;
    font-size: 14.439px;
    line-height: 22px;
    margin: 0;
    color: white;
    margin-bottom: 1rem;
  }

  input,
  select {
    padding-left: 16px;
    border: 2px solid transparent;
    margin-bottom: 1rem;
    border-radius: 4px;
    background: rgba(52, 59, 65, 1);
    width: 14.5rem;
    height: 2.5rem;
    color: white;
  }
  select {
    width: 16rem;
    height: 2.8rem;
  }

  .password:focus {
    outline: none;
    border: 2px solid rgba(248, 249, 250, 1);
    color: rgba(248, 249, 250, 1);
  }

  button {
    margin-top: 20px;
    color: white;
    width: 16rem;
    height: 2.4rem;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    background-color: var(--color-primary);
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    margin-bottom: 1rem;
    &:hover {
      background: var(--color-primary-focus);
    }
  }

  p {
    text-align: center;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    color: var(--gray-1);
    margin-top: 0.7rem;
    margin-bottom: 1.5rem;
  }
  .NavDiv {
    align-items: center;
    display: flex;
    flex-direction: column;
    a {
      text-align: center;
    }

    a:hover {
      background: var(--gray-2);
      border: 1px solid transparent;
      animation: alternate 0.5s infinite Link-Jump;
    }

    @keyframes Link-Jump {
      10% {
        background: var(--gray-3);
      }
      50% {
        background: gray;
        box-shadow: -1px 5px 47px 50px rgba(255, 255, 255, 0.37);
      }
      100% {
        background: var(--gray-5);
      }
    }
  }
  @media only screen and (min-width: 600px) {
    width: 20rem;
    padding: 3rem 0rem 2.5rem 1.5rem;

    input {
      width: 17rem;
    }
    select {
      width: 18.5rem;
    }
    button {
      width: 18.5rem;
    }
    .NavDiv {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-right: 1.5rem;
      a {
        text-align: center;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  input {
    border: none;
    width: 100%;
    padding-right: 40px;
  }

  svg {
    position: relative;
    display: flex;
    left: -30px;
    top: -9px;
    cursor: pointer;
  }
  @media only screen and (min-width: 600px) {
    width: 19.3rem;
  }
`;

export const LinkForm = styled(Link)`
  text-decoration: none;
  background: var(--gray-1);
  border: 1.2182px solid var(--gray-1);
  border-radius: 4px;
  padding: 0.8rem 5.5rem;
  color: white;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 12.8347px;
  line-height: 21px;

  @media only screen and (min-width: 600px) {
    padding: 0.8rem 5.5rem;
  }
`;
