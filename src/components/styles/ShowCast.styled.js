import styled from "styled-components";

export const StyledCast = styled.div`
  .top-bar {
    margin: auto;
    max-width: 75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 3.5rem 0 0;

    .show-name {
      margin: 0 1.5rem 0.5rem;
      color: gray;
      font-size: 1.5rem;
      text-align: center;
    }

    .back-btn {
      button {
        width: 13rem;
      }
    }
  }

  .replacer {
    margin-top: 5rem;
    width: 100%;
    text-align: center;

    .replacer-text {
      color: #667eea;
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 900px) {
    .top-bar {
      flex-direction: row;
      padding: 1.5rem 0;

      .show-name {
        margin: 0 1.5rem;
        color: gray;
        font-size: 2rem;
      }

      .back-btn {
        button {
          width: 9rem;
        }
      }
    }
  }
`;

export const CastGrid = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  .cast-box {
    margin: 1rem;
    padding: 1rem;
    height: 12rem;
    width: 22rem;
    display: flex;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.5);

    .cast-img-box {
      max-width: 7rem;
      margin-right: 2rem;
      background-color: #000;
      border-radius: 8px;
    }

    .cast-img {
      height: 100%;
      /* width: 100%; */
      display: block;
      border-radius: 8px;
      border: 1px solid #667eeab5;
    }

    .replacer {
      height: 100%;
      width: 7.1rem;
      background-color: #000;
      border-radius: 8px;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .name-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 0.8rem;

        .name {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
      }

      Button {
        margin: 0;
      }
    }
  }
`;
