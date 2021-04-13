import styled from "styled-components";

const BrandCard = ({}) => {
  return (
    <Background>
      <div className="left">
        <img
          src="https://i.stack.imgur.com/y9DpT.jpg"
          alt="Placeholder image"
        />
      </div>

      <div className="right">
        <h1>Nombre de la marca</h1>
        <p>Categoría</p>
      </div>
    </Background>
  );
};

const Background = styled.div`
  display: flex;

  width: 100%;
  height: 90px;

  border: 1px solid #e4e4e7;
  box-sizing: border-box;
  border-radius: 6px;

  padding: 0.8rem;

  img {
    width: 65px;
    height: 65px;
    margin-right: 0.5rem;

    object-fit: cover;

    border: 1.5px solid #e4e4e7;
    border-radius: 6px;
  }

  h1 {
    font-weight: bold;
    color: #111827;
  }

  p {
    font-weight: 600;
    color: #a1a1aa;
  }
`;

export default BrandCard;
