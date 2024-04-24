import React, { useState, useEffect } from "react";
import Login from "../Pages/Login"; // Importa tu componente Login
import Navbar from "../Components/Nabvar/Nabvar";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Nabvar/Menu";

import { Outlet } from "react-router-dom";

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Verificar si existe un token en el almacenamiento local al cargar la página
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez al cargar la página

    // Función para manejar la lógica de inicio de sesión
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    // Función para manejar la lógica de cierre de sesión
    const handleLogout = () => {
        // Eliminar el token del almacenamiento local
        localStorage.removeItem("token");
        // Actualizar el estado para indicar que el usuario ha cerrado sesión
        setIsLoggedIn(false);
    };

    return (
        <div>
            <header>
                {!isLoggedIn && <Login onLogin={handleLogin} />}
                {isLoggedIn && (
                    <>
                        <Navbar onLogout={handleLogout} />
                        <Menu />
                    </>
                )}
            </header>
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
