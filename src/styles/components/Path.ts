import styled from "styled-components";

export const Container = styled.div`
  margin: 6rem auto;
  width: 90%;

  h1 {
    font-weight: 700;
    font-size: 3.2rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem auto;
  overflow-x: hidden;
  position: relative;

  h1 {
    text-align: center;
    font-weight: 600;
    margin-bottom: 1.6rem;
  }

  ol {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #FFF;

    li {
      flex: 1;
      list-style: none;
      position: relative;
      text-align: center;

      &::before {
        content: "";
        width: 3rem;
        height: 3rem;
        display: flex;
        border: 1.4rem solid var(--quaternary-color);
        border-radius: 50%;
        background: #EAE2B7;
        margin: auto;
      }

      &:not(:last-child)::after {
        content: "";
        width: calc(100% - 1.4rem);
        height: 0.6rem;
        display: inline-flex;
        background: var(--tertiary-color);
        position: absolute;
        left: calc(50% + 7px);
        z-index: -1;
        align-items: center;
        justify-content: center;
        top: 25%;
      }
    }
  }
`;
