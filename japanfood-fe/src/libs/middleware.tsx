import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { getTokenFromLocalCookie, unsetToken } from "./auth";
import { axiosHttpRequest } from "./api";

interface MiddlewareType {
  children: React.ReactNode;
}

export const Middleware = ({ children }: MiddlewareType) => {
    return (<>{children}</>);
};

// kalau dah auth tapi mau ke page login. kita bakal tendang
export const Guest = ({ children }: MiddlewareType) => {
  const navigate = useNavigate();
  useEffect(() => {
    const JWTAuth = async () => {
        const jwt = Cookies.get("jwt");
        if (jwt) {
          try {
            await axiosHttpRequest({
              endpoint: "api/users/me",
              method: "GET", 
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
              },})
  
            navigate("/")
          } catch (error) {
          }
        }
      };
      JWTAuth();
  }, [])

  return <>{children}</>;
};

// blm login tapi mau ke page yang harus auth. nanti kita tendang ke login
export const Auth = ({ children }: MiddlewareType) => {
    const navigate = useNavigate();
    useEffect(() => {
        const JWTGuest = async () => {
            const jwt = getTokenFromLocalCookie()
            if (jwt) {
              try {
                await axiosHttpRequest({
                    endpoint: "api/users/me",
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${jwt}`,
                    },
                  });
              } catch (error) {
                unsetToken()
                navigate("/login")
              }
            }else{
                unsetToken()
                navigate("/login")
            }
          };
          JWTGuest();
    }, [])
  
    return <>{children}</>;
};

// ke page public tapi untuk cek kevalidan dari jwt token
export const Public = ({ children }: MiddlewareType) => {
    useEffect(() => {
      const JWTPublic = async () => {
        const jwt = getTokenFromLocalCookie()
        if (jwt) {
          try {
            await axiosHttpRequest({
                endpoint: "api/users/me",
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${jwt}`,
                },
              });
          } catch (error) {
            unsetToken()
          }
        }else{
            unsetToken()
        }
      };
      JWTPublic();
    },[]);
  
    return <>{children}</>;
};

Middleware.Auth = Auth;
Middleware.Guest = Guest;
Middleware.Public = Public;

export default Middleware;
