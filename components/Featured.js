import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;
const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;

export default function Featured({product}) {
  const {addProduct} = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                <Button white onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src="data:image/jpeg;base64,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" alt=""/>
          </Column>
        </ColumnsWrapper>
      </Center>

    </Bg>
  );
}