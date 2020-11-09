import styled from "styled-components";

export const ImageContainer = styled.div`
  margin-top: 8rem;

  div img {
    display: flex;
    max-width: 144rem;
  }

  @media (min-width: 2000px) {
    div img {
      max-width: 200rem;
    }
  }
`;

export const Main = styled.main`
  position: relative;

  div img.first-wave {
    background: var(--primary-color);
    max-width: 144rem;
    width: 100vw;
    z-index: -2;
    position: absolute;
    display: flex;
  }

  div img.second-wave {
    background: var(--secondary-color);
    max-width: 144rem;
    width: 100vw;
    display: flex;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.8rem;
  position: relative;
`;

export const PathContainer = styled.div`
  background: var(--secondary-color);
  z-index: -1;
  display: flex;
`;

export const CompanyContainer = styled.div`
  background: var(--quaternary-color);
  color: var(--primary-color);
  display: flex;
  margin-top: -1rem;
`;

export const ClassesContainer = styled.div`
  display: flex;
  background: var(--primary-color);
`;

export const MapContainer = styled.div`
  /* z-index: -1; */
`;

export const FooterContainer = styled.footer`
  background: var(--quaternary-color);
  color: var(--primary-color);
  padding-top: 4rem;
`;
