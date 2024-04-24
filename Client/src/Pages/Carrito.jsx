import React from "react";

const Carrito = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>
      {/* Lista de productos en el carrito */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Ejemplo de card de producto */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">Nombre del Producto</h2>
          <p className="text-gray-600">Descripción del producto.</p>
          <p className="text-gray-700 font-bold mt-2">$XX.XX</p>
          <button className="btn btn-primary mt-4">Eliminar</button>
        </div>
        {/* Fin del ejemplo */}
      </div>
      {/* Precio total */}
      <div className="mt-8 flex justify-end">
        <p className="text-lg font-semibold">Precio Total: $XX.XX</p>
      </div>
    </div>
  );
};

export default Carrito;