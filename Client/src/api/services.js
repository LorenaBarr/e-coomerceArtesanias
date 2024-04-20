import axios from "axios";

//Decidí usar Axios para las peticiones HTTP

//create una variable de entorno  con
//VITE_BACKEND= http://localhost:???? // dependiendo el puerto que agreguen los chicos

export class ApiClient {
  client;
  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_BACKEND,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  }

  //crearias las peticiones get, patch put delete etc, y esa ruta que marcamos son los endpoint que nos dara el backend, yo puse una de ejemplo.
  async getAllProducts() {
    return this.client.get(`/get-all-products`);
  }

  //si quisieras hacer otra petición cualquiera la harias asi, solo cambia el verbo http y el endpoint que nos brinde el backend
  async login(formLog) {
    return this.client.post(`/api/user/login/`, formLog);
  }

  async login(token) {
    return this.client.post(`/api/user/login/`, formLog);
  }

  async register(formLog) {
    return this.client.post(`/api/user/register/`, formLog);
  }
}
