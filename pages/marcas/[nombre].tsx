import { useRouter } from "next/router";
import styled from "styled-components";

// Component imports
import { Container } from "../../styles";
import ProductCard from "../../components/ProductCard";

const Marca = () => {
  const router = useRouter();
  const { nombre } = router.query;

  return (
    <StyledContainer>
      <div className="header">
        <div className="img">
          <img
            src="https://scontent.fgdl5-3.fna.fbcdn.net/v/t1.6435-9/116326864_183323696493269_3607546793202379192_n.png?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UnhCO51HSuwAX9XsQJk&_nc_ht=scontent.fgdl5-3.fna&oh=14c7fbfef1e40903ef6ab06ebd4bd4b4&oe=608D7756"
            alt={`Logo de la marca ${nombre}`}
          />
        </div>
        <h1 style={{ textTransform: "capitalize" }}>{nombre}</h1>
        <p>Tote bags personalizadas ✨</p>
      </div>

      <div className="buttons">
        <button className="button-main">Tienda en línea</button>
        <div className="grid grid-cols-2 gap-4">
          <button>Instagram</button>
          <button>Tiktok</button>
        </div>
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
  .header {
    margin: 80px 0 2rem 0;
    text-align: center;

    .img {
      border: 3px solid #aa9bfc;
      width: 90px;
      height: 90px;
      margin: 0 auto 20px auto;

      border-radius: 50%;

      img {
        border-radius: 50%;
      }
    }

    h1 {
      font-weight: bold;
      font-size: 20px;
      line-height: 28px;

      color: #111827;
    }

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;

      color: #4b5563;
    }
  }

  .list {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;

    justify-content: space-between;

    @media only screen and (max-width: 425px) {
      grid-template-columns: auto;
    }
  }

  .buttons {
    margin-bottom: 2rem;

    button {
      background: #f9fafb;
      border: 1px solid #d4d4d8;
      border-radius: 5px;
      display: block;

      padding: 0.8rem 0;
      width: 100%;

      font-weight: 600;
      color: #4b5563;
    }
  }

  .button-main {
    background-color: #d8d4f9 !important;
    color: #5d3eff !important;
    border: 1px solid #9b89fc !important;

    margin-bottom: 1rem;
  }
`;

export default Marca;
