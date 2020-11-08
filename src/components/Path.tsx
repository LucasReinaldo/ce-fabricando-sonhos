import PrismicDOM from "prismic-dom";
import { Document } from "prismic-javascript/types/documents";

import { Container, Section } from "@/styles/components/Path";

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
      <p>{PrismicDOM.RichText.asText(descricao)}</p>
      <Section>
        <h1>Manhã</h1>
        <ol>
          {morning.map(({ data }, index) => (
            <li key={index}>
              <h3>{PrismicDOM.RichText.asText(data.modalidade)}</h3>
              {PrismicDOM.RichText.asText(data.horario)}
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <h1>Tarde</h1>
        <ol>
          {afternoon.map(({ data }, index) => (
            <li key={index}>
              <h3>{PrismicDOM.RichText.asText(data.modalidade)}</h3>
              {PrismicDOM.RichText.asText(data.horario)}
            </li>
          ))}
        </ol>
      </Section>
    </Container>
  );
}
