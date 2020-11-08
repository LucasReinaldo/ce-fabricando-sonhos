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
  SocialContainer,
} from "@/styles/components/Footer";

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
              <input id="subject" placeholder="Assunto (visita, horário de funcionamento...)" />
            </div>
            <div className="input-block textarea">
              <textarea
                id="message"
                maxLength={300}
                placeholder="Escreva aqui sua mensagem (máximo de 300 caracteres)."
              />
            </div>
          </fieldset>
        </form>
      </FormContainer>
      <SocialContainer>
        <div className="icon">
          <IoLogoInstagram />
          <span>@cefabricandosonhos</span>
        </div>
        <div className="icon">
          <IoLogoFacebook />
          <span>Centro Educacional Fabricando Sonhos</span>
        </div>
        <div className="icon">
          <IoMdMail />
          <span>cefabricandosonhos@gmail.com</span>
        </div>
        <div className="icon">
          <IoIosCall />
          <span>48 3259-1928</span>
        </div>
        <div className="icon">
          <IoMdMap />
          <span>Rua Killiano Hammes, 1300</span>
        </div>
      </SocialContainer>
    </Container>
  );
}
