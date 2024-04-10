import React from "react";
import Nabvar from "../Components/Nabvar/Nabvar";
import Footer from "../Components/Footer/Footer";
import CarruselHome from "../Components/Carrusel/CarruselHome";
import ProductList from "../Components/Card/ProductList";
import Pagination from "../Components/Pagination/pagination";

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
        <Pagination />     
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Home;
