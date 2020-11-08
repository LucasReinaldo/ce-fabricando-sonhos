import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { Document } from "prismic-javascript/types/documents";

import {
  Container,
  TextContainer,
  Title,
  Description,
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
        <Title>{PrismicDOM.RichText.asText(titulo)}</Title>
        <Description>{PrismicDOM.RichText.asText(descricao)}</Description>
      </TextContainer>
      <ImageContainer>
        <Image src={sobre_imagem.url} unsized />
      </ImageContainer>
    </Container>
  );
}
