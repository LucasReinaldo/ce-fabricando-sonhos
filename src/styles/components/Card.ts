import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary-color);
  border-radius: 1.6rem;
  border: 1px solid var(--border-color);
  display: inline-block;
  height: 22rem;
  margin: 0 1.6rem;
  padding: 0.8rem;
  text-align: center;
  width: 22rem;
  font-size: 3.2rem;

  /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1300px) {
    height: 18rem;
    width: 18rem;
    margin-top: 4rem;
  }

  @media (max-width: 1000px) {
    height: 16rem;
    width: 16rem;
    font-size: 2.8rem;
    margin-top: 4rem;
  }

  @media (max-width: 860px) {
    height: 14rem;
    width: 14rem;
    font-size: 2.4rem;
    margin-top: 8rem;
  }

  @media (max-width: 660px) {
    height: 12rem;
    width: 12rem;
    font-size: 1.6rem;
    margin-top: 8rem;
  }

  @media (max-width: 400px) {
    height: 12rem;
    width: 12rem;
    font-size: 1.6rem;
    margin-top: 6rem;
  }
`;

export const Content = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  height: 100%;
  width: 100%;
  margin: auto;
`;
