import styled from "styled-components";

export const StyledForm = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    margin: 2.5rem 0;
    width: 13rem;
  }

  input {
    margin-top: 2.5rem;
    width: 70vw;
    padding-left: 0.8rem;
    outline: none;
    height: 1.8rem;
    border-radius: 10px;
    border: 1px solid #667eeab5;
    background-color: transparent;
    color: #fff;
    font-size: 1.1rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  @media screen and (min-width: 900px) {
    margin: 1.5rem;
    margin-right: auto;
    flex-direction: row;

    button {
      margin: 0 0 0 2rem;
      width: 9rem;
    }

    input {
      margin-top: 0;
      width: 20rem;
    }
  }
`;

export const StyledMain = styled.main`
  background-image: linear-gradient(to right bottom, #434343 0%, black 100%);
  width: 100%;
  min-height: 100vh;
  padding: 0 3rem 3rem 3rem;

  .replacer {
    margin-top: 5rem;
    width: 100%;
    text-align: center;

    .replacer-text {
      color: #667eea;
      font-size: 2rem;
    }
  }

  .shows-count {
    margin: 1.5rem 0;
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    color: #667eea;
    border-bottom: 1px solid gray;
  }

  @media screen and (min-width: 900px) {
    .replacer {
      margin-top: 8rem;
    }

    .shows-count {
      margin: 1.5rem 3.6rem;
      text-align: start;
    }
  }
`;

export const StyledShowsNav = styled.div`
  margin: 0 auto 2rem;
  display: flex;
  flex-flow: column-reverse wrap;
  align-items: center;

  @media screen and (min-width: 900px) {
    max-width: 75rem;
    margin: 2rem auto;
    display: flex;
    flex-flow: row wrap;
  }
`;

export const StyledShowsGrid = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fit, 210px);
  justify-content: center;
  gap: 2rem;
  overflow: visible;

  .link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(108%);
    }
    p {
      margin-top: 0.4rem;
      font-size: 0.8rem;
      color: #fff;

      .accentend-info {
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }

  .img-tile {
    background-color: #000;
    width: 70vw;
    height: 110vw;
    overflow: hidden;
    border-radius: 8px;
    background-size: cover;
    background-position: center;

    @media screen and (min-width: 550px) {
      width: 14rem;
      height: 20rem;
    }
  }
`;
