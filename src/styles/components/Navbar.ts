import styled from "styled-components";

interface UIProps {
  open?: boolean;
}

export const Header = styled.nav`
  background-color: var(--primary-color);
  align-items: flex-start;
  display: flex;
  position: fixed;
  font-size: 1.8rem;
  height: 8rem;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  width: 100vw;

  div img {
    display: flex;
    max-width: 6rem;
    cursor: pointer;
    margin-right: 1.6rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
  max-width: 130rem;
`;

export const Menu = styled.div<UIProps>`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div.items-list {
    flex: 1;
    display: flex;

    ul {
      flex: 1;
      display: flex;
      list-style: none;
      align-items: center;

      li {
        display: flex;
        margin: 0 0.4rem;

        a {
          font-weight: 500;
          padding: 0.8rem;
          text-transform: uppercase;
          transition: all 300ms ease-out;

          &:hover {
            background: var(--secondary-shadow);
            border-radius: 0.8rem;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    div.items-list ul {
      background-color: var(--quaternary-color-dark);
      display: flex;
      flex-flow: column nowrap;
      height: 100vh;
      padding-top: 4rem;
      position: fixed;
      right: 0;
      top: 0;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      transition: transform 0.3s ease-in-out;
      width: 32rem;

      li {
        padding: 1.8rem 1rem;
        text-transform: uppercase;
        font-weight: 500;
        color: var(--primary-color);
        font-size: 2.4rem;

        a:hover {
          background: transparent;
        }
      }

      li:active {
        background-color: var(--quaternary-color);
      }
    }
  }
`;

export const HamburguerIcon = styled.div<UIProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div {
      width: 2.2rem;
      height: 0.3rem;
      background-color: ${({ open }) =>
        open ? "#FFF" : "var(--secondary-color)"};
      border-radius: 1rem;
      transform-origin: 0.1rem;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-left: auto;

  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: auto;
    margin-bottom: 4rem;
    margin-left: 0;
  }
`;

export const Contact = styled.div<UIProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  padding-right: 0.8rem;
  transition: all 300ms ease-out;

  span.icon {
    background: var(--secondary-shadow);
    border-radius: 50%;
    display: flex;
    height: 3rem;
    width: 3rem;
    padding: 0.8rem;
    justify-content: center;
    align-items: center;

    svg {
      display: flex;
      height: 2.4rem;
      width: 2.4rem;
    }

    span.text {
      font-size: 1.6rem;
      padding-right: 1.6rem;
    }
  }

  &:hover {
    background: var(--secondary-shadow);
    border-radius: 0.8rem;

    span.icon {
      background: none;
    }
  }

  @media (max-width: 768px) {
    span.icon {
      background: transparent;
      border-radius: 50%;
      display: flex;
      height: 4.8rem;
      width: 4.8rem;
      padding: 0.4rem;
      justify-content: center;
      align-items: center;
      color: var(--primary-color);

      flex-flow: column nowrap;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

      svg {
        display: flex;
        height: 4.8rem;
        width: 4.8rem;
      }
    }

    span.text {
      display: none;
    }
  }
`;
