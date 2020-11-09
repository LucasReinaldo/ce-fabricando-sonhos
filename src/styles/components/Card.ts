import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  height: 20rem;
  width: 20rem;

  background: var(--primary-color);
  border-radius: 1.6rem;
  border: 1px solid var(--border-color);
  padding: 0.8rem;
  margin-top: 1.6rem;

  /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

export const Content = styled.h3`
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: center;
`;
