import Cookies from "js-cookie";

interface user {
  id: number;
  username: string;
}

interface data {
  user: user;
  jwt: string;
}

export const setToken = (data: data, navigate: Function) => {
  if (typeof window === "undefined") {
    return;
  }

  Cookies.set("id", data.user.id.toString());
  Cookies.set("username", data.user.username);
  Cookies.set("jwt", data.jwt);

  navigate("/");
};

export const unsetToken = () => {
  if (typeof window === "undefined") {
    return;
  }
  Cookies.remove("id");
  Cookies.remove("jwt");
  Cookies.remove("username");
};

export const getTokenFromLocalCookie = () => {
  return Cookies.get("jwt");
};