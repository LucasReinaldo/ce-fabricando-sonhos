import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  max-width: 144rem;
  transition: all .8s ease-in-out;
  scroll-behavior: smooth;

  #Home, #About, #Classes, #Contact {
  	scroll-behavior: smooth;

  }
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
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.8rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.6rem 0.8rem;
    gap: 0.8rem;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 425px) {
    padding: 1.6rem 0.8rem;
    justify-content: flex-start;
    gap: 0.8rem;
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
