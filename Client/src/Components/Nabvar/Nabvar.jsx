import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
const Nabvar = () => {
    const handleClickLogout = () => {
        localStorage.clear();
        // window.location.reload();
    };
    const [totalCart, setTotalCart] = useState(0);
    const { cart } = useContext(UserContext);
    useEffect(() => {
        const total = cart.reduce((acc, product) => {
            return acc + product.price * product.quantity;
        }, 0);
        console.log(total);
        setTotalCart(total);
    }, [cart]);
    return (
        <div className="navbar bg-accent">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">ARTESANIAS EXPRESS</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>

                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                    >
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="badge badge-sm indicator-item">
                                {cart.length}
                            </span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                    >
                        <div className="card-body">
                            <span className="font-bold text-lg">
                                {cart.length} Items
                            </span>
                            <span className="text-info">
                                Subtotal: ${totalCart}
                            </span>
                            <div className="card-actions">
                                <Link
                                    to="/cart"
                                    className="btn btn-primary btn-block"
                                >
                                    Ver
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

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
                            <Link to="/login" onClick={handleClickLogout}>
                                Cerrar sesion
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nabvar;
