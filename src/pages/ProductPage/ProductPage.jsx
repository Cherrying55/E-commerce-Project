import styled from "styled-components";
import Header from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ProductView } from "./components/ProductView";
import { Summary } from "../CartPage/components/Summary";
import { ProductInfo } from "./components/ProductInfo";

export function ProductPage() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <ProductView />
          <ProductInfo />
        </main>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 60px;
  padding-left: 6%;
  padding-right: 6%;
  width: 100%;
  padding-top: 10vh;

  .top {
    width: 100%;
  }

  main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  section {
    width: 100%;
    > h1 {
      font-size: 26px;
      width: 100%;
      font-weight: bold;
      margin-bottom: 20px;
    }

    hr {
      width: 100%;
      background: #c0c0c0;
      height: 1px;
      border: none;
    }
    margin-bottom: 40px;
  }
`;

/*
 <h1>Shopping cart</h1>
            <h4>To save your shopping bag, login or register</h4>
 <CartItemsContainer>
                {
                    cart.items.map(
                        (i) => <CartItem name={i.name} color={i.color} image={i.image} price={i.price} quantity={i.quantity} />
                    )
                }
            </CartItemsContainer>

*/
