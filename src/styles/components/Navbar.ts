import styled from "styled-components";

export const Header = styled.nav`
  align-items: flex-start;
  display: flex;
  position: fixed;
  font-size: 1.8rem;
  height: 8rem;
  left: 0;
  right: 0;
  top: 0;
  background-color: var(--primary-color);
  z-index: 10;

  @media (max-width: 800px) {
    font-size: 1.6rem;
  }

  img {
    display: flex;
    width: 6rem;
  }

  nav {
    ul {
      display: flex;
      align-items: center;

      li {
        list-style: none;

        &.active {
          a {
            border-bottom: 3px solid var(--secondary-color);
          }
        }

        a {
          text-transform: uppercase;
          padding: 0.8rem 1.6rem;
          transition: all 100ms linear 0s;
          font-weight: 500;

          &:hover {
            background: var(--secondary-shadow);
            border-radius: 0.8rem;
          }
        }
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        div {
          flex-direction: row;
          align-items: center;

          span.icon {
            align-items: center;
            background: var(--secondary-shadow);
            border-radius: 50%;
            display: flex;
            height: 2.8rem;
            justify-content: center;
            margin: 0 0.8rem;
            padding: 0.4rem;
            width: 2.8rem;
          }

          svg {
            display: flex;
            height: 2.4rem;
            width: 2.4rem;
          }

          p {
            font-size: 1.6rem;
          }
        }
      }

      @media (max-width: 800px) {
        div {
          display: none;
        }
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 130rem;
  margin: auto;
`;
