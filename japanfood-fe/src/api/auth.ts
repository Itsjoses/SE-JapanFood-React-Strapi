import { axiosHttpRequest } from "../libs/api";
import { getTokenFromLocalCookie } from "../libs/auth";

export const apiLogin = async(data : { identifier: string; password: string }) => {
    try {   
        const responseData = await axiosHttpRequest({
            endpoint: `api/auth/local`,
            body: {
              identifier: data.identifier,
              password: data.password,
            },
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
        return responseData
    } catch (error) {
        throw error
    }
}

export const apiRegister = async(data : { username: string,email: string; password: string }) => {
  try {   
      const responseData = await axiosHttpRequest({
          endpoint: `api/auth/local/register`,
          body: {
            username: data.username,
            email: data.email,
            password: data.password,
          },
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
      return responseData
  } catch (error) {
      throw error
  }
}

export const apiCheckUsername= async() => {
  const jwtLocal = getTokenFromLocalCookie()
  try {   
    const responseData = await axiosHttpRequest({
        endpoint: `api/users/me`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtLocal}`,
        },
        method: "GET",
      });
    return responseData.data.username
} catch (error) {
    throw error
}
}
