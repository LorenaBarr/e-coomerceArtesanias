import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import Swal from "sweetalert2";
import { ApiClient } from "../../api/services";

const UserLogin = () => {
    const apiClient = new ApiClient();
    const { setUser } = useContext(UserContext);
    // Función para manejar la lógica de cierre de sesión
    const destroySesion = async () => {
        const response = await apiClient.logout();
        setUser(null);
    };
    const handleLogout = async () => {
        Swal.fire({
            title: "Estas seguro que quiere cerrar sesión?",
            text: "si cierra sesión no podrá seguir agregando productos al carrito",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cerrar Sesión",
        }).then((result) => {
            if (result.isConfirmed) {
                destroySesion();
                localStorage.removeItem("token");
                Swal.fire({
                    title: "Hasta pronto",
                    text: "Cerraste exitosamente tu cuenta",
                    icon: "success",
                });
            }
        });
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
                    <button onClick={handleLogout}>Cerrar sesion</button>
                </li>
            </ul>
        </div>
    );
};

export default UserLogin;
