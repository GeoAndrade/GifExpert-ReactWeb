import axios, { AxiosError, AxiosResponse } from "axios";

export const useRequest = () => {
  //#region AxiosConfig
  // Create an axios instance for the token endpoint
  /*   const ApiTokenRequest = axios.create({
    baseURL: ApiEndpoints.BaseURL + ApiEndpoints.Token,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  });

  // Create an axios instance for the other endpoints
  const ApiRequest = axios.create({
    baseURL: ApiEndpoints.BaseURL + ApiEndpoints.BaseApi,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JWTInfo?.token ?? ''}`,
    },
  });
  const ApiPostFileRequest = axios.create({
    baseURL: ApiEndpoints.BaseURL,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer  ${JWTInfo?.token ?? ''}`,
      otherHeader: 'foo',
    },
  });
 */
  //#endregion

  //#region RequestConfig

  const getRequest = async <T extends unknown>(
    endpoint: string,
    params?: object
  ): Promise<T> =>
    await axios
      .get(endpoint, { params })
      .then(({ data }: AxiosResponse<T>) => data)
      .catch((error: AxiosError<any>) => {
        console.log(JSON.stringify(error, null, 3));
        throw error;
      });
  //#endregion

  return { getRequest };
};
