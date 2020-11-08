import { Container, Content } from "@/styles/components/Card";

export default function Card({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
