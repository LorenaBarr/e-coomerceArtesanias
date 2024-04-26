import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
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
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
            >
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://userpic.codeforces.org/3541583/title/5479f16d18c204ee.jpg"
                    />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li>
                    <a>Settings</a>
                </li>
                <li>
                    <Link to="/login">Cerrar sesion</Link>
                </li>
            </ul>
        </div>
    );
};

export default UserLogin;
