import axios, { AxiosError, HttpStatusCode } from "axios";
import userImage from "../../public/user.svg";

import { ErrorResponse } from "../types/utils.type";
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error);
}

export function isAxiosUnprocessableEntityError<FormError>(
  error: unknown
): error is AxiosError<FormError> {
  return (
    isAxiosError(error) &&
    error.response?.status === HttpStatusCode.UnprocessableEntity
  );
}
export function isAxiosUnAuthorizedError<UnAuthorizedError>(
  error: unknown
): error is AxiosError<UnAuthorizedError> {
  return (
    isAxiosError(error) &&
    error.response?.status === HttpStatusCode.Unauthorized
  );
}

export function isAxiosExpiredTokenError<UnAuthorizedError>(
  error: unknown
): error is AxiosError<UnAuthorizedError> {
  return (
    isAxiosUnAuthorizedError<ErrorResponse<{ name: string; message: string }>>(
      error
    ) && error.response?.data.data?.message === "EXPIRED_TOKEN"
  );
}
