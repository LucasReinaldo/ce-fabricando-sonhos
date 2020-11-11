import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

export const Description = styled.p`
  text-align: justify;
  font-size: 1.8rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4.8rem auto 0;
  overflow-x: hidden;
  position: relative;

  h2 {
    text-align: center;
    margin-bottom: 1.6rem;
  }

  ol {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: var(--primary-color);

    li {
      flex: 1;
      list-style: none;
      position: relative;
      text-align: center;

      &::before {
        content: "";
        width: 2rem;
        height: 2rem;
        display: flex;
        border: 1rem solid var(--quaternary-color);
        border-radius: 50%;
        background: #eae2b7;
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
