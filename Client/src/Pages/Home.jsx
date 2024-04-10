import React from "react";
import Nabvar from "../Components/Nabvar/Nabvar";
import Footer from "../Components/Footer/Footer";
import CarruselHome from "../Components/Carrusel/CarruselHome";
import ProductList from "./ProductList";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <Nabvar />
      </header>
      <main className="h-screen">
        <CarruselHome />
        <ProductList />
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Home;
