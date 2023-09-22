import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import SignForm from "../assets/SignForm.jsx";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import Header from "../components/Header.jsx";
import Main from "../assets/Main.jsx";

export default function SignUpPage() {
  //const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dados, setDados] = useState({ email: "", password: "", name: "" });

  function alterardados(e) {
    let newobj = { ...dados };
    newobj[e.target.name] = e.target.value;
    setDados({ ...newobj });
  }

  function fazercadastro(e) {
    setLoading(true);
    e.preventDefault();
    axios
      .post("https://localhost:5000/sign-up", dados)
      .then((res) => {
        login(res.data);
        navigate("/login");
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente");
        setLoading(false);
      });
  }

  return (
    <>
      <Header />
      <Main>
        <SignForm onSubmit={fazercadastro}>
          <h1>Create an account</h1>
          <hr></hr>
          <label for="name">
            Name
            <input
              type="text"
              name="name"
              placeholder="Nome"
              onChange={alterardados}
            />
          </label>
          <label for="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={alterardados}
            />
          </label>
          <label for="password">
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
              "ENTRAR"
            )}
          </button>
        </SignForm>
        <Link to="/">Already have an account? Login now</Link>
      </Main>
    </>
  );
}
