import styled from "styled-components";

export const Container = styled.div`
  max-width: 144rem;
  height: 60vh;
  position: relative;
  display: flex;

  .leaflet-container {
    z-index: 1;
  }

  @media (max-width: 768px) {
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  position: absolute;
  z-index: 2;
  bottom: 1.6rem;
  width: 100%;
  background: transparent;
`;

export const TextTyle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Text = styled.h5`
  background: var(--primary-color);
  padding: 1.6rem 3.2rem;
  border-radius: 4rem;
  border: 1px solid var(--border-color);
  cursor: pointer;
`;
