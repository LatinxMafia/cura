import styled from "styled-components";

import { GoSearch } from "react-icons/go";

const Input = ({ ...props }) => {
  return (
    <Container>
      <div className="icon-container">
        <GoSearch size={20} style={{ color: "#A1A1AA" }} />
      </div>
      <input type="text" {...props} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #e4e4e7;
  border-radius: 5px;
  margin-bottom: 1rem;

  input {
    border: none;
    width: 100%;

    &::placeholder {
      color: #a1a1aa;
    }

    &:focus {
      outline: none !important;
      box-shadow: none;
    }
  }

  .icon-container {
    padding: 0.5rem 0 0.5rem 0.5rem;
  }
`;

export default Input;
