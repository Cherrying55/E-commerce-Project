import Header from "../components/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import BestSelling from "../components/BestSelling";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ProductsPage() {
  const [bestselling, setBestSelling] = useState([]);
  const { category } = useParams();

  return (
    <>
    <Helmet>
      <title>Product category</title>
      <meta name="description" content="Discover the latest range of designer women's clothing, shoes & accessories at STARR.com. Enjoy free shipping, returns & gift wrapping." />
      <link rel="canonical" href="/products/category" />
    </Helmet>
      <Header />
      <BestSelling name="Skirts" />
    </>
  );
}
