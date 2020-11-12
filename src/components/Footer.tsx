import { FormEvent, useState } from "react";
import Axios from "axios";

import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoMdMail,
  IoIosCall,
  IoMdMap,
} from "react-icons/io";

import {
  Container,
  FormContainer,
  ContactContainer,
  SocialContainer,
  OpenHoursContainer,
  WeekDays,
  WeekHours,
} from "@/styles/components/Footer";

interface FormProps {
  name: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
}

interface StatusProps {
  submitted?: boolean;
  submitting?: boolean;
  info: {
    error: boolean;
    msg: string;
  };
}

const LAT = 53.3364736;
const LONG = -6.275072;

export default function Footer() {
  const [status, setStatus] = useState<StatusProps>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState<FormProps>({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({ info: { error: true, msg: msg } });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <Container>
      <FormContainer>
        <form onSubmit={handleSubmitForm}>
          <fieldset>
            <legend>Contato</legend>
            <div className="input-block name-contact">
              <div>
                <input
                  id="name"
                  placeholder="Seu nome"
                  value={inputs.name}
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <input
                  id="phoneNumber"
                  placeholder="Seu telefone"
                  value={inputs.phoneNumber}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="input-block">
              <input
                id="email"
                placeholder="Seu e-mail"
                value={inputs.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-block">
              <input
                id="subject"
                placeholder="Assunto (visita, horário de funcionamento...)"
                value={inputs.subject}
                onChange={handleOnChange}
              />
            </div>
            <div className="input-block textarea">
              <textarea
                id="message"
                maxLength={300}
                placeholder="Escreva aqui sua mensagem (máximo de 300 caracteres)."
                value={inputs.message}
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" disabled={status.submitting}>
              {!status.submitting
                ? !status.submitted
                  ? "Enviar"
                  : "Enviado"
                : "Enviando..."}
            </button>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">{status.info.msg}</div>
            )}
          </fieldset>
        </form>
      </FormContainer>
      <ContactContainer>
        <SocialContainer>
          <div className="icon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/cefabricandosonhos"
            >
              <IoLogoInstagram />
              <span>@cefabricandosonhos</span>
            </a>
          </div>
          <div className="icon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/cefabricandosonhos"
            >
              <IoLogoFacebook />
              <span>Centro Educacional Fabricando Sonhos</span>
            </a>
          </div>
          <div className="icon">
            <a href="mailto:cefabricandosonhos@gmail.com">
              <IoMdMail />
              <span>cefabricandosonhos@gmail.com</span>
            </a>
          </div>
          <div className="icon">
            <a href="tel:4832591928">
              <IoIosCall />
              <span>48 3259-1928</span>
            </a>
          </div>
          <div className="icon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/maps/dir/?api=1&destination=${LAT},${LONG}`}
            >
              <IoMdMap />
              <span>Rua Killiano Hammes, 1300</span>
            </a>
          </div>
        </SocialContainer>
        <OpenHoursContainer>
          <WeekDays>Segunda - Sexta</WeekDays>
          <WeekHours>07:00 - 18:30</WeekHours>
        </OpenHoursContainer>
      </ContactContainer>
    </Container>
  );
}
