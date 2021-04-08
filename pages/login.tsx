import styled from "styled-components";
import CurrencyFormat from "react-currency-format";

// Component imports
import { Container } from "../styles/";

const Login = () => {
  return (
    <StyledContainer>
      <div className="intro-text">
        <h1>Descubre tu nueva marca favorita.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit nunc
          ut facilisis pharetra, et nisl. Auctor tristique elementum
          pellentesque id integer.
        </p>
      </div>

      <div className="input-container">
        <p>Ingresa tu número celular para continuar</p>
        <CurrencyFormat
          format="+## (###) ###-####"
          mask="_"
          placeholder="+00 (000) 000-0000"
        />
        <button>Continuar</button>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  margin-top: 4rem;

  h1 {
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;

    letter-spacing: -0.02em;

    margin-bottom: 0.65rem;

    color: #111827;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #4b5563;
  }

  .intro-text {
    margin-bottom: 1.25rem;
  }

  .input-container {
    p {
      margin-bottom: 0.3rem;
    }

    /* TODO: abstraer el codigo de este input para que los estilos no estén definidos aquí */
    input {
      width: 100%;
      border: 1px solid #d4d4d8;
      border-radius: 5px;
      padding: 0.625rem 1rem;
      margin-bottom: 0.625rem;
    }

    button {
      background: #84cc16;
      border-radius: 5px;
      width: 100%;
      color: white;

      padding: 0.625rem 1rem;

      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export default Login;
