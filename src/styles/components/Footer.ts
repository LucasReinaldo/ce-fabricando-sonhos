import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto 2.4rem;
  gap: 4rem;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  flex: 0.6;
  margin-top: 4rem;
  display: flex;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;

    fieldset {
      border: 0;

      legend {
        display: none;
      }

      .input-block.name-contact,
      .input-block.name-contact div {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 1.6rem;
      }

      .input-block input,
      .input-block textarea {
        width: 100%;
        background: var(--primary-color);
        border: 0.1rem solid var(--border-color);
        border-radius: 0.8rem;
        outline: none;
        font-weight: 600;
      }

      .input-block input {
        height: 4rem;
        padding: 0 1.6rem;
      }

      .input-block textarea {
        min-height: 16rem;
        max-height: 24rem;
        resize: vertical;
        padding: 1.6rem;
        line-height: 2.8rem;
      }

      .input-block + .input-block {
        margin-top: 1.6rem;
      }
    }

    button {
      padding: 0.4rem 1.6rem;
      border-radius: 0.8rem;
      background: #f5f8fa;
      border: 0.1rem solid var(--border-color);
      cursor: pointer;
      font-weight: 600;
      margin-top: 0.8rem;
    }
  }
`;

export const ContactContainer = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    margin: 0.4rem 0;

    svg {
      width: 4rem;
      height: 4rem;
    }

    span {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;

    div {
      margin: 1.6rem;
    }

    div span {
      display: none;
    }
  }
`;

export const OpenHoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WeekDays = styled.h4``;

export const WeekHours = styled.p``;
