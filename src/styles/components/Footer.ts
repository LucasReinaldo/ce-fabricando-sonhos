import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 90%;
  margin: 0 auto 2.4rem;
  gap: 4rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  flex: 1;

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
        flex: 1;
        gap: 1.6rem;
      }

      .input-block input,
      .input-block textarea {
        width: 100%;
        background: #f5f8fa;
        border: 0.1rem solid #d3e2e5;
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
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

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
      font-size: 2rem;
    }
  }

  @media (max-width: 900px) {
    flex-direction: row;
    
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
      margin: 0.4rem 0;

      svg {
        width: 3.2rem;
        height: 3.2rem;
      }

      span {
        font-size: 1.8rem;
      }
    }
  }
`;
