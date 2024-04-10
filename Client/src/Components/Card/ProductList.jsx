import React from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/pagination";


const ProductList = () => {
    const products = [
      {
        id: 1,
        name: "Mochila Tejida",
        price: 49.99,
        imageUrl: "https://www.istockphoto.com/es/foto/mochila-wayuu-gm534624660-94870823",
      },
      {
        id: 2,
        name: "Cerámica Oaxaca",
        price: 49.99,
        imageUrl: "https://www.istockphoto.com/es/foto/negro-clay-cer%C3%A1mica-oaxaca-m%C3%A9xico-gm153510454-17120375",
      },
      {
        id: 3,
        name: "Clay vase",
        price: 49.99,
        imageUrl: "https://www.istockphoto.com/es/foto/clay-vase-gm476809500-66306895",
      },
      // Agrega más objetos de productos aquí...
    ];
  
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / itemsPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const paginatedProducts = products.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    return (
      <div>
        {/* Renderiza los productos */}
        {paginatedProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
  
        {/* Renderiza la paginación */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    );
  };
  
  export default ProductList;