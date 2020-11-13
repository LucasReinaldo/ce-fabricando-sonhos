import styled from "styled-components";

export const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  height: 18rem;
  width: 18rem;

  background: var(--primary-color);
  border-radius: 1.6rem;
  border: 1px solid var(--border-color);
  margin: 1.6rem;

  /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 13rem;
    width: 13rem;
    justify-content: space-around;
    margin: 0.8rem;
  }
`;

export const Content = styled.h3`
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;
