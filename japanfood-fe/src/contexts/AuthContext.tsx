import React, { useEffect } from 'react'
import { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie'
import { getTokenFromLocalCookie, unsetToken } from '../libs/auth';
import { apiCheckUsername } from '../api/auth';

interface UserContextType {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
  }
interface AuthType {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType>({user: "", setUser: () => {}});

export const useUser = () => {
    const { user, setUser } = useContext(UserContext);
    return { user, setUser };
  };

export default function AuthContext({children}: AuthType) {
    const [user,setUser] = useState<string>(Cookies.get('username') || "")

    useEffect(() => {
        const getUsernameLocal = async () => {
          const jwtLocal = getTokenFromLocalCookie();
          if (jwtLocal) {
            try {
              const getUsername = await apiCheckUsername()
              if(getUsername !== user){
                Cookies.set("username", getUsername);
                setUser(getUsername)
              }
            } catch (error) {
              unsetToken()
            }
          }else{
            setUser("")
            unsetToken()
          } 
        }
        getUsernameLocal()
      }, []);

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
