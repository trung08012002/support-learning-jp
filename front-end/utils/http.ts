import axios, { AxiosInstance } from "axios";
import useEffect from "react";

class Http {
  instance: AxiosInstance;

  private refreshTokenRequest: Promise<string> | null;
  constructor() {
    this.refreshTokenRequest = null;
    this.instance = axios.create({
      baseURL: "http://3.83.172.113/api",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  getRefreshTokenRequest(): Promise<string> | null {
    return this.refreshTokenRequest;
  }
  setRefreshTokenRequest(request: Promise<string> | null) {
    this.refreshTokenRequest = request;
  }
}

const http = new Http().instance;

export default http;
