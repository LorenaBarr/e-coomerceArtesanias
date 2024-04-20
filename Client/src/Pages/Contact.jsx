import React from "react";
import Nabvar from "../Components/Nabvar/Nabvar";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Nabvar/Menu";

const Contact = () => {
  return (
    <main className="h-screen p-4">
      <section className="bg-base-100 shadow-xl p-6 rounded-box">
        <h1 className="text-center text-3xl font-bold mb-6">Contacto</h1>
        <div className="container mx-auto">
          <form className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className="text-left block">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Ingrese su nombre completo"
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-left block">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                placeholder="Ingrese su correo electrónico"
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="text-left block">
                Número de Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                placeholder="Ingrese su número de teléfono"
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="pais" className="text-left block">
                País
              </label>
              <input
                type="text"
                id="pais"
                placeholder="Ingrese su país"
                className="w-full border rounded-md p-2"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="mensaje" className="text-left block">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                className="w-full border rounded-md p-2"
                placeholder="Escriba su mensaje aquí"
              ></textarea>
            </div>
            <div className="col-span-2">
              <button className="btn btn-primary w-full border rounded-md p-2">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
