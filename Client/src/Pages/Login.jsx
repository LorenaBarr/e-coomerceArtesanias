import React, { useState, useEffect, useContext } from "react";
import { ApiClient } from "../api/services";
import Swal from "sweetalert2";
import UserContext from "../context/UserContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const apiClient = new ApiClient();

  const [loading, setLoading] = useState(false);
  const [formLog, setFormLog] = useState({
    Email: "",
    Password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      setLoading(true);
      const response = await apiClient.login(formLog);
      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token);
      }
      Swal.fire({
        title: "¡Éxito!",
        text: response.data.msg,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      const user = await apiClient.log();
      console.log(user);
      return;
    } catch (error) {
      Swal.fire({
        title: "¡Error!",
        text: error.response
          ? error.response.data.msg
          : "☹ ups.. algo fallo, intente más tarde",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChangeLog = (e) => {
    const { name, value } = e.target;
    setFormLog({ ...formLog, [name]: value });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="Email"
                className="input input-bordered"
                onChange={handleChangeLog}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="Password"
                className="input input-bordered"
                onChange={handleChangeLog}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                <span>Login</span>
                {loading && (
                  <span className="loading loading-spinner loading-lg"></span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
