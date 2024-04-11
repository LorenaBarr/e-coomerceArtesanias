// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/pagination";
import ProductModal from "../Card/ProductModal";


const ProductList = () => {
    const products = [
      {
        id: 1,
        name: "Mochila Tejida",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/36552_catalogo-fusagasuga-artesanias-colombia-2020-g.jpg",
      },
      {
        id: 2,
        name: "Cerámica Oaxaca",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/40781_40781_40781_fortalecimiento-artesanal-cundinamarca-artesanias-colombia-2022-g.jpeg",
      },
      {
        id: 3,
        name: "Clay vase",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Glosario/38569_cuidado-artesanias-colombia-raquira.jpg",
      },

      {
        id: 4,
        name: "Mochila Tejida",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/36552_catalogo-fusagasuga-artesanias-colombia-2020-g.jpg",
      },
      {
        id: 5,
        name: "Cerámica Oaxaca",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/40781_40781_40781_fortalecimiento-artesanal-cundinamarca-artesanias-colombia-2022-g.jpeg",
      },
      {
        id: 6,
        name: "Clay vase",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Glosario/38569_cuidado-artesanias-colombia-raquira.jpg",
      },

      {
        id: 7,
        name: "Mochila Tejida",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Catalogo/335_mochila-wayuu-g.png",
      },
      {
        id: 8,
        name: "Cerámica Oaxaca",
        price: 49.99,
        imageUrl: "https://artesaniascolombianas.co/wordpress/wp-content/uploads/2017/11/mochila_wayuu_135_2.jpg",
      },
      {
        id: 9,
        name: "Clay vase",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Glosario/38569_cuidado-artesanias-colombia-raquira.jpg",
      },

      {
        id: 1,
        name: "Mochila Tejida",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/36552_catalogo-fusagasuga-artesanias-colombia-2020-g.jpg",
      },
      {
        id: 2,
        name: "Cerámica Oaxaca",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/40781_40781_40781_fortalecimiento-artesanal-cundinamarca-artesanias-colombia-2022-g.jpeg",
      },
      {
        id: 3,
        name: "Clay vase",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Glosario/38569_cuidado-artesanias-colombia-raquira.jpg",
      },
      {
        id: 1,
        name: "Mochila Tejida",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/36552_catalogo-fusagasuga-artesanias-colombia-2020-g.jpg",
      },
      {
        id: 2,
        name: "Cerámica Oaxaca",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/40781_40781_40781_fortalecimiento-artesanal-cundinamarca-artesanias-colombia-2022-g.jpeg",
      },
      {
        id: 3,
        name: "Clay vase",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Glosario/38569_cuidado-artesanias-colombia-raquira.jpg",
      },

      {
        id: 1,
        name: "Mochila Tejida",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/36552_catalogo-fusagasuga-artesanias-colombia-2020-g.jpg",
      },
      {
        id: 2,
        name: "Cerámica Oaxaca",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/40781_40781_40781_fortalecimiento-artesanal-cundinamarca-artesanias-colombia-2022-g.jpeg",
      },
      {
        id: 3,
        name: "Clay vase",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Glosario/38569_cuidado-artesanias-colombia-raquira.jpg",
      },
      {
        id: 1,
        name: "Mochila Tejida",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/36552_catalogo-fusagasuga-artesanias-colombia-2020-g.jpg",
      },
      {
        id: 2,
        name: "Cerámica Oaxaca",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/40781_40781_40781_fortalecimiento-artesanal-cundinamarca-artesanias-colombia-2022-g.jpeg",
      },
      {
        id: 3,
        name: "Clay vase",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Glosario/38569_cuidado-artesanias-colombia-raquira.jpg",
      },
      {
        id: 1,
        name: "Mochila Tejida",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/36552_catalogo-fusagasuga-artesanias-colombia-2020-g.jpg",
      },
      {
        id: 2,
        name: "Cerámica Oaxaca",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/40781_40781_40781_fortalecimiento-artesanal-cundinamarca-artesanias-colombia-2022-g.jpeg",
      },
      {
        id: 3,
        name: "Clay vase",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Glosario/38569_cuidado-artesanias-colombia-raquira.jpg",
      },
      {
        id: 1,
        name: "Mochila Tejida",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/36552_catalogo-fusagasuga-artesanias-colombia-2020-g.jpg",
      },
      {
        id: 2,
        name: "Cerámica Oaxaca",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/40781_40781_40781_fortalecimiento-artesanal-cundinamarca-artesanias-colombia-2022-g.jpeg",
      },
      {
        id: 3,
        name: "Clay vase",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Glosario/38569_cuidado-artesanias-colombia-raquira.jpg",
      },
      {
        id: 1,
        name: "Mochila Tejida",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/36552_catalogo-fusagasuga-artesanias-colombia-2020-g.jpg",
      },
      {
        id: 2,
        name: "Cerámica Oaxaca",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Contenido/40781_40781_40781_fortalecimiento-artesanal-cundinamarca-artesanias-colombia-2022-g.jpeg",
      },
      {
        id: 3,
        name: "Clay vase",
        price: 49.99,
        imageUrl: "https://artesaniasdecolombia.com.co/Documentos/Glosario/38569_cuidado-artesanias-colombia-raquira.jpg",
      },
    ];
  
    const itemsPerRow = 3;
  const rowsPerPage = 2;
  const itemsPerPage = itemsPerRow * rowsPerPage;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {/* Renderizar las tarjetas de productos */}
      {paginatedProducts.map((product) => (
        <Card key={product.id} product={product} onClick={handleCardClick} />
      ))}

      {/* Rellenar las tarjetas faltantes para mantener la estructura */}
      {Array(itemsPerRow - (paginatedProducts.length % itemsPerRow))
        .fill(null)
        .map((_, index) => (
          <div className="w-1/3" key={index}></div>
        ))}

      {/* Renderizar el modal si showModal es true */}
      {showModal && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}

      {/* Renderizar la paginación */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;