import Header from "../components/Header";
import { Breadcrumb } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export function AccountPage() {
  const [currentabout, setCurrentAbout] = useState("accountinformation");

  return (
    <>
    <Helmet>
      <title>Product name</title>
      <meta name="description" content="Check and change your account information at Starr." />
      <link rel="canonical" href="/membership" />
    </Helmet>
      <Header />
      <Container>
        <div className="top">
          <Breadcrumb />
          <section>
            <h1>Profile</h1>
            <hr></hr>
          </section>
        </div>
        <Content>
          <Options>
            <h1>Membership</h1>
            <h2>Account Information</h2>
            <h2>Credit Cards</h2>
            <h2>Address Book</h2>
            <h2>Purchase History</h2>
          </Options>
          <About>
            {currentabout === "accountinformation" ? (
              <>
                <h1>
                  Profile <button>Edit Profile</button>
                </h1>
                <hr></hr>
                <h2>Email</h2>
                <h3>email@email.com</h3>
                <h2>Name</h2>
                <h3>John Doe</h3>
                <h2>Birthday</h2>
                <h3>01/01/1990</h3>
              </>
            ) : currentabout === "creditcards" ? (
              <>
                <h1>Credit Cards</h1>
                <hr></hr>
                <h2>Email</h2>
                <h3>email@email.com</h3>
                <h2>Name</h2>
                <h3>John Doe</h3>
                <h2>Birthday</h2>
                <h3>01/01/1990</h3>
              </>
            ) : (
              <>
                <h1>Addresses</h1>
                <hr></hr>
                <h2>Email</h2>
                <h3>email@email.com</h3>
                <h2>Name</h2>
                <h3>John Doe</h3>
                <h2>Birthday</h2>
                <h3>01/01/1990</h3>
              </>
            )}
          </About>
        </Content>
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

const Content = styled.main``;

const Options = styled.div`
  width: 20%;

  h1 {
    font-size: 26px;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;
const About = styled.div`
  width: calc(80% - 80px);

  h1 {
    font-size: 31px;
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  hr {
    width: 100%;
    background: #c0c0c0;
    height: 1px;
    border: none;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 23px;
    margin-bottom: 20px;
  }

  button {
    background: #e6e2e1;
    display: flex;
    align-items: center;
    height: 40px;
    color: black;
    border: none;
    font-weight: bold;
    justify-content: center;
    font-size: 18px;
    padding: 10px;
    width: 20%;
  }
`;
