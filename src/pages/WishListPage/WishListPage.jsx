import styled from "styled-components";
import Header from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { WishListItem } from "./components/WishListItem";
import { Helmet } from "react-helmet-async";

export function WishListPage() {
  return (
    <>
    <Helmet>
      <title>Wishlist</title>
      <meta name="description" content="Check the items in your wishlist at Starr" />
      <link rel="canonical" href="/wishlist" />
    </Helmet>
      <Header />
      <Container>
        <div className="top">
          <Breadcrumb />
          <section>
            <h1>Wishlist</h1>
            <hr></hr>
          </section>
        </div>
        <main>
          <WishListItemsContainer>
            <WishListItem />
            <WishListItem />
            <WishListItem />
            <WishListItem />
          </WishListItemsContainer>
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

const WishListItemsContainer = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;

/*
 <h1>Shopping cart</h1>
            <h4>To save your shopping bag, login or register</h4>
 <WishListItemsContainer>
                {
                    cart.items.map(
                        (i) => <WishListItem name={i.name} color={i.color} image={i.image} price={i.price} quantity={i.quantity} />
                    )
                }
            </WishListItemsContainer>

*/
