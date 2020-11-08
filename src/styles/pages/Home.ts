import styled from "styled-components";

export const ImageContainer = styled.div`
  margin-top: 8rem;

  @media (min-width: 2000px) {
    div img {
      max-width: 200rem;
    }
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 2000px) {
    margin: 0.8rem;
  }
`;

export const Main = styled.main`
  position: relative;
`;

export const WaveContainer = styled.div`
  position: relative;
  z-index: -2;

  img.first-wave {
    flex: 1;
    max-width: 100vw;
  }

  img.second-wave {
    max-width: 100vw;
    background: var(--secondary-color);
    margin-top: -6rem;
    z-index: -3;
  }

  @media (min-width: 2000px) {
    img.first-wave,
    img.second-wave {
      max-width: 200rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -28rem;

  @media (max-width: 660px) {
    margin-top: -24rem;
  }

  @media (max-width: 400px) {
    margin-top: -20rem;
  }
`;

export const PathContainer = styled.div`
  background: var(--secondary-color);
  z-index: -2;
  position: relative;
  display: flex;
`;

export const CompanyContainer = styled.div`
  background: var(--quaternary-color);
  color: #fff;
  margin-top: -1rem;
  padding-bottom: 2rem;
`;

export const ClassesContainer = styled.div`
  
`;

export const MapContainer = styled.div`
  z-index: -1;
  position: relative;
`;

export const FooterContainer = styled.footer`
  background: var(--quaternary-color);
  color: #fff;
  padding-top: 4rem;
`;
