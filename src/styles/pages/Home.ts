import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  max-width: 144rem;
  width: 100vw;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const Main = styled.main`
  position: relative;
  margin-top: 8rem;

  div img.background {
    display: flex;
    max-width: 144rem;
  }

  div img.first-wave {
    background: var(--primary-color);
    max-width: 144rem;
    width: 100vw;
    z-index: -1;
    position: absolute;

    @media (max-width: 370px) {
      height: 24rem;
    }
  }

  div img.second-wave {
    background: var(--secondary-color);
    max-width: 144rem;
    width: 100vw;
    display: flex;
    z-index: -1;
    height: 100%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.8rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.6rem;
    gap: 1.6rem;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 425px) {
    padding: 1.6rem;
    justify-content: flex-start;
    gap: 1.6rem;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const PathContainer = styled.div`
  background: var(--secondary-color);
  z-index: -2;
  display: flex;
`;

export const CompanyContainer = styled.div`
  background: var(--quaternary-color);
  color: var(--primary-color);
  display: flex;
  margin-top: -1.6rem;
  z-index: 2;
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
`;
