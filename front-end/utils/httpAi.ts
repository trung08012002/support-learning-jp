import axios, { AxiosInstance } from "axios";

class HttpAi {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://aa2d-34-105-89-76.ngrok-free.app",
      timeout: 10000,
    });
  }
}

const httpAi = new HttpAi().instance;

export default httpAi;
