import Link from "next/link";
import styled from "styled-components";

// Component imports
import { Container } from "../../styles";
import Input from "../../components/ui/Input";
import BrandCard from "../../components/BrandCard";

const Marcas = () => {
  return (
    <StyledContainer>
      <div className="top-info">
        <h1>Explora</h1>
        <p>Explora las marcas de esta semana</p>
      </div>

      <Input placeholder="Buscar una marca" />

      <div className="list">
        <Link href="/marcas/caypa">
          <a>
            <BrandCard />
          </a>
        </Link>
        <Link href="/marcas/caypa">
          <a>
            <BrandCard />
          </a>
        </Link>
        <Link href="/marcas/caypa">
          <a>
            <BrandCard />
          </a>
        </Link>
        <Link href="/marcas/caypa">
          <a>
            <BrandCard />
          </a>
        </Link>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  .list {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;

    @media only screen and (max-width: 425px) {
      grid-template-columns: auto;
    }
  }
`;

export default Marcas;
