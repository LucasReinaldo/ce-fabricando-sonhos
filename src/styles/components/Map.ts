import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 60vh;
  position: relative;
  display: flex;
  max-width: 200rem;

  @media (max-width: 400px) {
    height: 50vh;
  }
`;
