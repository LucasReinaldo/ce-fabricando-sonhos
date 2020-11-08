import Image from "next/image";
import PrismicDOM from "prismic-dom";
import { Document } from "prismic-javascript/types/documents";

import {
  Container,
  Section,
  ImageContainer,
  TextContainer,
  Title,
  Description,
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
            <Title>{PrismicDOM.RichText.asText(data.titulo)}</Title>
            <Description>
              {PrismicDOM.RichText.asText(data.descricao)}
            </Description>
          </TextContainer>
        </Section>
      ))}
    </Container>
  );
}
