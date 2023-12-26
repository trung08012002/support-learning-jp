import { AxiosError, HttpStatusCode, InternalAxiosRequestConfig } from "axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "react-toast";
import { ErrorResponse } from "types/utils.type";
import http from "utils/http";
import {
  isAxiosExpiredTokenError,
  isAxiosUnAuthorizedError,
} from "utils/utils";
const URL_REFRESH_TOKEN = "/token/refreshToken";

const useAxiosAuth = () => {
  const { data: session } = useSession();
  const refreshToken = async () => {
    const res = await http.post(URL_REFRESH_TOKEN, {
      refreshToken: session?.user.refreshToken,
    });
    if (session) {
      session.user.accessToken = res.data.accessToken;
    }
  };
  useEffect(() => {
    const requestIntercept = http.interceptors.request.use(
      (config) => {
        if (session?.user.accessToken && config.headers) {
          config.headers.authorization = `Bearer ${session.user.accessToken}`;
        }
        return config;
      },
      (error: AxiosError) => {
        {
          if (
            ![
              HttpStatusCode.UnprocessableEntity,
              HttpStatusCode.Unauthorized,
            ].includes(error.response?.status as number)
          ) {
            const data: any | undefined = error.response?.data;
            const message = data.message || error.message;
            toast.error(message);
          }
          if (
            isAxiosUnAuthorizedError<
              ErrorResponse<{ name: string; message: string }>
            >(error)
          ) {
            const config =
              error.response?.config ||
              ({ headers: {} } as InternalAxiosRequestConfig);
            const { url } = config;
            if (isAxiosExpiredTokenError(error) && url !== URL_REFRESH_TOKEN) {
              return refreshToken().then(() => {
                if (config?.headers) {
                  config.headers.Authorization = session?.user.refreshToken;
                }
                return http({
                  ...config,
                  headers: {
                    ...config.headers,
                    authorization: session?.user.accessToken,
                  },
                });
              });
            }

            toast.error(error.response?.data.message || "");
          }
          return Promise.reject(error);
        }
      }
    );

    return () => {
      http.interceptors.request.eject(requestIntercept);
    };
  }, [session]);
  return http;
};
export default useAxiosAuth;
