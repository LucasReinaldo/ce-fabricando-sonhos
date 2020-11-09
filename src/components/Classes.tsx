import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { Document } from "prismic-javascript/types/documents";

import {
  Container,
  Section,
  ImageContainer,
  TextContainer,
} from "@/styles/components/Classes";

interface ClassesProps {
  classes: Document[];
}

export default function Classes({ classes }: ClassesProps) {
  return (
    <Container>
      {classes.map(({ data }, index) => (
        <Section key={index}>
          <ImageContainer>
            <Image src={data.extra_classes_imagem.url} unsized />
          </ImageContainer>
          <TextContainer>
            <h1>{PrismicDOM.RichText.asText(data.titulo)}</h1>
            <p>{PrismicDOM.RichText.asText(data.descricao)}</p>
          </TextContainer>
        </Section>
      ))}
    </Container>
  );
}
