import styled from "styled-components";

export const StyledActor = styled.div`
  display: flex;
  flex-direction: column;

  .back-btn {
    align-self: center;
    margin-bottom: 2rem;

    Button {
      margin: 0;
    }
  }
  .actor-box {
    margin: auto;
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;

    .actor-info {
      display: flex;
      flex-direction: column;
      color: #fff;
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;
      margin-bottom: 2rem;

      .actor-name {
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        padding: 1rem 0;
      }

      .actor-desc {
        margin-bottom: 0.5rem;
      }
    }

    .actor-img-box {
      width: 18rem;
      border: 1px solid #667eeab5;
      background-color: #000;
      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.5);
      align-self: flex-start;
      margin: auto;

      .actor-img {
        width: 100%;
        display: block;
      }

      .replacer {
        width: 100%;
        height: 20rem;
      }
    }
  }

  @media screen and (min-width: 900px) {
    .back-btn {
      align-self: flex-start;
    }
    .actor-box {
      flex-direction: row;

      .actor-info {
        margin: 0 3rem;
        width: 20rem;
      }
    }
  }
`;
