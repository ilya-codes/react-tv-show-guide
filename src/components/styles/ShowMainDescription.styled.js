import styled from "styled-components";

export const StyledMainDescription = styled.div`
  padding: 3rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  overflow: hidden;

  .img-desc {
    width: 100%;
    border: 1px solid #667eeab5;
    align-self: flex-start;

    img {
      display: block;
      width: 100%;
      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.5);
    }
  }

  .text-desc {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column-reverse;
    color: gray;

    .upper-plank {
      display: flex;
      justify-content: space-between;
      margin: 2rem 0;

      .rating {
        width: 25rem;
        font-size: 1.5rem;
        font-weight: 600;
        border-top: 1px solid gray;
      }
    }

    .sub-info {
      display: flex;
      justify-content: space-between;
    }

    Button {
      margin: 0;
    }

    .summary {
      text-align: justify;
      margin: 3rem 0;
    }

    .schedule,
    .show-name,
    .network-name {
      color: #fff;
      font-size: 1.1rem;
      letter-spacing: 0.1rem;
    }

    .schedule {
      margin: 2rem 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      line-height: 2rem;
    }

    .network-name {
      margin: 2rem 0;
    }

    .links-btns {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      margin-top: 1.5rem;

      a {
        text-decoration: none;
        color: #fff;
        margin: 1rem;

        button {
          margin: 0;
          width: 13rem;
        }
      }
    }
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    padding: 5rem 0;

    .img-desc {
      width: 25rem;
    }

    .text-desc {
      width: 40rem;
      margin-left: 5rem;
      flex-direction: column;

      .links-btns {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2rem;
        margin-top: 0;

        a {
          margin: 0;

          button {
            margin: 0;
            width: 9rem;
          }
        }
      }
    }
  }
`;
