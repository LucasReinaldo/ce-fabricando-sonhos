import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { Document } from "prismic-javascript/types/documents";

import {
  Container,
  TextContainer,
  ImageContainer,
} from "@/styles/components/Company";

interface CompanyProps {
  about: Document[];
}

export default function Company({ about }: CompanyProps) {
  const { titulo, descricao, sobre_imagem } = about[0].data;

  return (
    <Container>
      <TextContainer>
        <h1>{PrismicDOM.RichText.asText(titulo)}</h1>
        <p>{PrismicDOM.RichText.asText(descricao)}</p>
      </TextContainer>
      <ImageContainer>
        <Image src={sobre_imagem.url} unsized />
      </ImageContainer>
    </Container>
  );
}
