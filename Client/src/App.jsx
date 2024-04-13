import React from "react";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Páginas
// import Error404 from "./Pages/Error404";

import Section from "./Pages/Section"; 

//aquí declaramos las rutas e importamos las páginas ahi deje unos ejemplos con el error 404 pero deberiamos agregar el componente qye corresponda cuando le den a la url que queremos.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Section />,
    children: [
      {
        path: "",
        index: true,
        element: <Section />,
      },
      {
        path: "/",
        element: <Section />,
      },
    ],
  },
  {
    path: "*",
    element: <Section />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
