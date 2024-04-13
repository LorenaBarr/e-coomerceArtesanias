import React from "react";
import Nabvar from "../Components/Nabvar/Nabvar";
import Footer from "../Components/Footer/Footer";
import  Section from "./Section";
import Pagination from "../Components/Pagination/pagination";
import Menu from "../Components/Nabvar/Menu";

//import { Outlet } from "react-router-dom";


const Home = () => {
  return (
    <div className="container">
      <header>
        <Nabvar />
        <Menu />
      </header>
      <main className="content">
      
        <Section /> {/* Renderiza el componente Section */}
        <div className="pagination-container">
          <Pagination />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;