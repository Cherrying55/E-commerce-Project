import Header from "../components/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import BestSelling from "../components/BestSelling";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [bestselling, setBestSelling] = useState([]);
  let filter = useSelector(state => {
    return state.userReducer.currentUser;
  });
  const navigate = useNavigate()

  return (
    <>
    <Helmet>
      <title>STARR</title>
      <meta name="description" content="Shop at the official site of Starr. Discover the latest dresses, handbags, shoes and tops collections" />
      <link rel="canonical" href="/" />
    </Helmet>
      <Header />
      <BestSelling name="All products" />
    </>
  );
}
