import React, { useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Páginas
import Error404 from "./Pages/Error404";
import Section from "./Pages/Section";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";

//aquí declaramos las rutas e importamos las páginas ahi deje unos ejemplos con el error 404 pero deberiamos agregar el componente qye corresponda cuando le den a la url que queremos.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
    children: [
      {
        path: "",
        index: true,
        element: <Section />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
};

export default App;
