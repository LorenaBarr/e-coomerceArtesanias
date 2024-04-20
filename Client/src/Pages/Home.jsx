import React from "react";
import Nabvar from "../Components/Nabvar/Nabvar";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Nabvar/Menu";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <Nabvar />
        <Menu />
      </header>
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
