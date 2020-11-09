import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto 4.8rem;
  width: 90%;
  gap: 4.8rem;

  @media (max-width: 920px) {
    gap: 1.6rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  flex-direction: column;

  p {
    text-align: justify;
  }

  @media (max-width: 920px) {
    margin-right: 0;
  }
`;

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
