import styled from "styled-components";

const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.75);

  .Modal-Container {
    color: var(--gray-0);

    background: var(--gray-3);
    width: 17.5rem;
    height: 16.5rem;

    z-index: 9999;

    box-shadow: 0px 3.19783px 31.9783px -7.99458px rgba(0, 0, 0, 0.25);
    border-radius: 3.19783px;
    margin: 10rem auto;
    .header-Modal {
      display: flex;
      align-items: center;
      background: var(--gray-2);
      border-radius: 4px 4px 0px 0px;
      justify-content: space-between;
      min-height: 2.5rem;
      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 11.2304px;
        line-height: 19px;

        margin: 0.5rem 0rem 0.8rem 1rem;
      }

      button {
        background: transparent;
        border: none;
        color: var(--gray-1);
        font-style: normal;
        font-weight: 600;
        font-size: 12.8347px;
        line-height: 21px;
        margin-right: 0.7rem;
      }
    }

    .body-Modal {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;

      form {
        display: flex;
        flex-direction: column;

        input,
        select {
          background-color: var(--gray-2);
          color: var(--gray-1);
          min-height: 2.5rem;
          border: 0.973899px solid #343b41;
          border-radius: 3.19783px;
          padding: 0 0 0 1rem;
          font-weight: 400;
          font-size: 12.9853px;
          line-height: 21px;
        }

        label {
          margin: 1rem;
          font-weight: 400;
          font-size: 9.772px;
          line-height: 0px;
        }

        .button-Container {
          display: flex;
          justify-content: space-between;

          .button-Standart {
            border: none;
            background: var(--gray-1);
            margin-top: 1rem;
            border: 1.2182px solid transparent;
            border-radius: 5px;

            font-style: normal;
            font-weight: 500;
            font-size: 12.7913px;
            line-height: 21px;

            color: var(--gray-0);

            min-height: 2.3rem;

            &:hover {
              background: var(--gray-2);
            }
          }
          button:first-child {
            background: var(--color-primary);

            &:hover {
              background: var(--color-primary-focus);
            }
          }

          .button-Create {
            width: 15.6rem;
          }
          .button-Edit {
            width: 10rem;
          }
          .button-Delete {
            width: 4.5rem;
          }
        }
      }
    }

    @media only screen and (min-width: 800px) {
      min-width: 23rem;
      min-height: 21rem;
      margin: 10rem 30vw;
      .header-Modal {
        min-height: 3.1rem;

        h2 {
          font-size: 14px;
          line-height: 24px;
          margin: 0.5rem 0rem 0.8rem 1rem;
        }

        button {
          font-style: normal;
          font-size: 16px;
          line-height: 26px;
          margin-right: 1rem;
        }
      }

      .body-Modal {
        padding: 0 1.3rem;

        form {
          input,
          select {
            min-height: 3rem;
            padding: 0 0 0 1.5rem;
            font-weight: 400;
            font-size: 12.9853px;
            line-height: 21px;
          }

          label {
            margin: 1.5rem 0;
            font-size: 12.182px;
          }

          .button-Container {
            .button-Standart {
              margin-top: 1.5rem;

              font-weight: 500;
              font-size: 12.7913px;
              line-height: 21px;

              min-height: 3rem;
            }

            .button-Create {
              width: 20.5rem;
            }
            .button-Edit {
              width: 13rem;
            }
            .button-Delete {
              width: 6.1rem;
            }
          }
        }
      }
    }
  }
`;

export default ModalContainer;
