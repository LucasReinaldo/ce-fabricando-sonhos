import PrismicDOM from "prismic-dom";
import { Document } from "prismic-javascript/types/documents";

import { Container, Description, Section } from "@/styles/components/Path";

interface PathProps {
  routine: Document[];
  morning: Document[];
  afternoon: Document[];
}

export default function Path({ routine, morning, afternoon }: PathProps) {
  const { titulo, descricao } = routine[0].data;

  return (
    <Container>
      <h1>{PrismicDOM.RichText.asText(titulo)}</h1>
      <Description>{PrismicDOM.RichText.asText(descricao)}</Description>
      <Section>
        <h2>Manhã</h2>
        <ol>
          {morning.map(({ data }, index) => (
            <li key={index}>
              <h4>{PrismicDOM.RichText.asText(data.modalidade)}</h4>
              {PrismicDOM.RichText.asText(data.horario)}
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <h2>Tarde</h2>
        <ol>
          {afternoon.map(({ data }, index) => (
            <li key={index}>
              <h4>{PrismicDOM.RichText.asText(data.modalidade)}</h4>
              {PrismicDOM.RichText.asText(data.horario)}
            </li>
          ))}
        </ol>
      </Section>
    </Container>
  );
}
