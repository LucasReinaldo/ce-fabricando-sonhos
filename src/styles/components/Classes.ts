import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 4rem auto;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3.2rem 0;
  gap: 4.8rem;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 860px) {
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    margin: 1.6rem auto;
    gap: 2.4rem;

    &:nth-child(even) {
      flex-direction: column-reverse;
    }
  }
`;

export const ImageContainer = styled.div`
  img {
    flex: 1;
    display: flex;
    width: auto;
    max-width: 54rem;

    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
    border-top-right-radius: 4rem;
  }
`;

export const TextContainer = styled.div`
  flex-direction: column;
  
  p {
    text-align: justify;
  }
`;
