import React from "react";
import Nabvar from "../Components/Nabvar/Nabvar";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Nabvar/Menu";

const Products = () => {
  // Array de categorías
  const categories = [
    "Cerámica",
    "Textiles y Tejidos",
    "Joyas y Bisutería",
    "Madera Tallada",
    "Vidrio Soplado y Vitrales",
    "Cuero y Marroquinería",
    "Metalistería",
    "Pintura y Arte en Papel",
    "Cestería y Mimbre"
  ];

  return (
    <div className="container">
      <header>
        <Nabvar />
        <Menu />
      </header>
      <main className="content p-4">
        <section className="bg-base-100 shadow-xl p-6 rounded-box">
          <h1 className="text-3xl font-bold mb-4">Products</h1>
          <div className="section-content">
            {/* Selector de categorías */}
            <div className="mb-4">
              <label htmlFor="category" className="mr-2">Categoría:</label>
              <select id="category" className="border rounded-md p-2">
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;