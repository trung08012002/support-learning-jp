import axios, { AxiosInstance } from "axios";

class HttpAi {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://5200-34-87-2-238.ngrok-free.app",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

const httpAi = new HttpAi().instance;

export default httpAi;
