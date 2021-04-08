import Link from "next/link";
import styled from "styled-components";

import { FaHeart, FaRegHeart } from "react-icons/fa";

interface ProductProps {
  title: string;
  brand: string;
  store: string;
  isLiked?: boolean;
}

const ProductCard = ({
  title = "Product title",
  brand = "Brand Name",
  store = "https://google.com",
  isLiked,
}: ProductProps) => {
  return (
    <Background>
      <div className="top">
        <img
          src="https://cdn.shopify.com/s/files/1/1403/8979/products/1-pc-Korean-style-Corduroy-Tote-Bag-japanese-korean-fashion-bag-for-girls-female-women-12_1024x1024.jpeg?v=1542279668"
          alt="Prenda (TBD)"
        />
      </div>
      <div className="bottom">
        <button style={{ display: "block" }}>
          {isLiked ? (
            <FaHeart size={24} style={{ color: "#fe3636" }} />
          ) : (
            <FaRegHeart size={24} style={{ color: "#000" }} />
          )}
        </button>

        <div className="flex flex-col justify-between h-full">
          <div>
            <h1>{title}</h1>
            <Link href={`/marcas/${brand}`}>
              <a>
                <p>{brand}</p>
              </a>
            </Link>
          </div>

          <div>
            <a href={store} target="_blank" className="buy-link">
              Comprar ahora
            </a>
          </div>
        </div>
      </div>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 480px;

  border: 1px solid #e4e4e7;
  border-radius: 12px;

  display: grid;
  position: relative;
  grid-template-rows: 65% 35%;

  .bottom {
    padding: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 12px 12px 0 0;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  h1 {
    color: #111827;
    font-weight: bold;
    font-size: 24px;
  }

  p {
    color: #a1a1aa;
    font-size: 18px;
  }

  button {
    position: absolute;
    top: 17.8rem;
    right: 1rem;

    background: #ffffff;
    border: 1px solid #e4e4e7;
    padding: 0.8rem;
    border-radius: 50%;
  }

  .buy-link {
    background: #5d3eff;
    border-radius: 5px;

    padding: 10px 16px;
    color: white;

    display: inline-block;
    text-align: center;

    width: 100%;
  }
`;

export default ProductCard;
