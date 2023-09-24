import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import SignForm from "../assets/SignForm.jsx";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import Header from "../components/Header.jsx";
import RegisterForm from "../assets/RegisterForm.jsx";
import Product from "../components/Product.jsx";
import { Helmet } from "react-helmet-async";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dados, setDados] = useState({ email: "", password: "" });

  function alterardados(e) {
    let newobj = { ...dados };
    newobj[e.target.name] = e.target.value;
    setDados({ ...newobj });
  }

  function login() {
    console.log("a");
  }

  function fazerlogin(e) {
    setLoading(true);
    e.preventDefault();
    axios
      .post("https://localhost:5000/sign-in", dados)
      .then((res) => {
        login(res.data);
        navigate("/");
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente");
        setLoading(false);
      });
  }

  return (
    <>
    <Helmet>
      <title>Product name</title>
      <meta name="description" content="Login at Starr's online store" />
      <link rel="canonical" href="/sign-in" />
    </Helmet>
      <Header />
      <Main>
        <SignForm onSubmit={fazerlogin}>
          <h1>Login</h1>
          <hr></hr>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={alterardados}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={alterardados}
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? (
              <ThreeDots color="#FFFFFF" height={50} width={50} />
            ) : (
              "SIGN IN"
            )}
          </button>
        </SignForm>
        <RegisterForm>
          <h1>Create an account</h1>
          <hr></hr>
          <h2>
            Streamline checkout and register today for free!
            <br />
            <br />
            Create an account and get a coupon
          </h2>
          <button
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            CREATE ACCOUNT
          </button>
        </RegisterForm>
      </Main>
    </>
  );
}

const Main = styled.div`
  margin-top: 120px;
  width: 100%;
  display: flex;
  padding-left: 6%;
  padding-right: 6%;
  gap: 4%;
  height: calc(80vh - 120px);
  padding-top: 10vh;
`;

/* const { login } = useContext(AuthContext); import AuthContext from "../contexts/AuthContext.js";*/
