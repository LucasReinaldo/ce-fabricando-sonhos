import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  margin: auto;
  width: 90%;

  @media (max-width: 920px) {
    gap: 1.6rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  flex-direction: column;
  margin-right: 4.8rem;
  text-align: justify;

  @media (max-width: 920px) {
    margin-right: 0;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
`;

export const Description = styled.p``;

export const ImageContainer = styled.div`
  div,
  img {
    flex: 1;
    display: flex;
    width: auto;
    max-width: 60rem;

    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
    border-top-left-radius: 4rem;
  }
`;
