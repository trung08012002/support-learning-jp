import axios, { AxiosInstance } from "axios";
import useEffect from "react";

class Http {
  instance: AxiosInstance;

  private refreshTokenRequest: Promise<string> | null;
  constructor() {
    this.refreshTokenRequest = null;
    this.instance = axios.create({
      baseURL: "https://nhtweb.click/api",
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
