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

const LAT = 53.3364736;
const LONG = -6.275072;

export default function Footer() {
  return (
    <Container>
      <FormContainer>
        <form>
          <fieldset>
            <legend>Contato</legend>
            <div className="input-block name-contact">
              <div>
                <input id="name" placeholder="Seu nome" />
              </div>
              <div>
                <input id="contact" placeholder="Seu telefone" />
              </div>
            </div>
            <div className="input-block">
              <input id="email" placeholder="Seu e-mail" />
            </div>
            <div className="input-block">
              <input
                id="subject"
                placeholder="Assunto (visita, horário de funcionamento...)"
              />
            </div>
            <div className="input-block textarea">
              <textarea
                id="message"
                maxLength={300}
                placeholder="Escreva aqui sua mensagem (máximo de 300 caracteres)."
              />
            </div>
            <button>Enviar</button>
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
