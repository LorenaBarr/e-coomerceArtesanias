import React from "react";

const Menu = () => {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-base-200 py-2 shadow-dark-mild  lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <nav className="w-full rounded-md" aria-label="breadcrumb">
          <ol className="list-reset ms-2 flex">
            <li>
              <a
                href="#"
                className="text-black transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-black/60 dark:hover:text-black/80 dark:focus:text-black/80 dark:active:text-black/80"
              >
                Inicio
              </a>
            </li>
            <li>
              <span className="mx-2 text-black dark:text-black/60">/</span>
            </li>
            <li>
              <a
                href="#"
                className="text-black transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-black/60 dark:hover:text-black/80 dark:focus:text-black/80 dark:active:text-black/80"
              >
                Nosotros
              </a>
            </li>
            <li>
              <span className="mx-2 text-black dark:text-black/60">/</span>
            </li>
            <li>
              <a
                href="#"
                className="text-black transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-black/60 dark:hover:text-black/80 dark:focus:text-black/80 dark:active:text-black/80"
              >
                Productos
              </a>
            </li>
            <li>
              <span className="mx-2 text-black dark:text-black/60">/</span>
            </li>
            <li>
              <a
                href="#"
                className="text-black transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-black/60 dark:hover:text-black/80 dark:focus:text-black/80 dark:active:text-black/80"
              >
                Contacto
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </nav>
  );
};

export default Menu;
