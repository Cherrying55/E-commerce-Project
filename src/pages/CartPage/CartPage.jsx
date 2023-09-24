import styled from "styled-components";
import Header from "../../components/Header";
import { Summary } from "./components/Summary";
import { CartItem } from "./components/CartItem";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Helmet } from "react-helmet-async";

export default function CartPage() {
  return (
    <>
    <Helmet>
      <title>Shopping cart</title>
      <meta name="description" content="Check the items in your cart at Starr" />
      <link rel="canonical" href="/cart" />
    </Helmet>
      <Header />
      <Container>
        <div className="top">
          <Breadcrumb />
          <section>
            <h1>Shopping cart</h1>
            <hr></hr>
          </section>
        </div>
        <main>
          <CartItemsContainer>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </CartItemsContainer>
          <Summary item_amount={1} subtotal={150} shipping={25} tax={30} />
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
    gap: 80px;
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

const CartItemsContainer = styled.div`
  width: 60%;
  gap: 4%;
  flex-wrap: wrap;
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
