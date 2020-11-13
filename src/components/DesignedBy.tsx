import { IoIosHeart } from "react-icons/io";
import { Container } from "@/styles/components/DesignedBy";

export default function DesignedBy() {
  return (
    <Container>
      Design with <IoIosHeart size={16} color="red" /> by
      <h5>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/LucasReinaldo"
        >
          Lucas Reinaldo.
        </a>
      </h5>
    </Container>
  );
}
