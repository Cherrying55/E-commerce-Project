import Header from "../components/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import BestSelling from "../components/BestSelling";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  const [bestselling, setBestSelling] = useState([]);
  const { category } = useParams();

  return (
    <>
      <Header />
      <BestSelling name="Skirts" />
    </>
  );
}
