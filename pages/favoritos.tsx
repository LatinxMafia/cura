import styled from "styled-components";

// Component imports
import { Container } from "../styles/";
import ProductCard from "../components/ProductCard";

const Favoritos = () => {
  return (
    <StyledContainer>
      <div className="top-info">
        <h1>Tus Favoritos</h1>
        <p>Estos son tus productos favoritos</p>
      </div>

      <div className="list">
        <ProductCard
          title="Product title"
          brand="Brand Name"
          store="https://google.com"
          isLiked
        />
        <ProductCard
          title="Product title"
          brand="Brand Name"
          store="https://google.com"
        />
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

export default Favoritos;
