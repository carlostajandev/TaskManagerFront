import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { decodeToken } from 'react-jwt';
import axiosInstance from '../../adapters/axiosInstance';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [auth, setAuth] = useState(null);
  const loginApp = (token, role) => {
    localStorage.setItem("AUTH", token);
    setRole(role)
    setAuth(token);
    axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + token;
  };

  const logout = () => {
    localStorage.clear();
    setAuth(null);
    setRole(null);
    delete  axiosInstance.defaults.headers.common["Authorization"];
  };
  useEffect(() =>{
    const token = localStorage.getItem("AUTH");
    if(token && token != ""){
     const decode =  decodeToken(token);
      axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + token;
      setRole(decode.sub);
      setAuth(token);
    }else{
      logout();
    }
  }, [])
  const data = useMemo(() =>{
    return {
      auth,
      role,
      loginApp,
      logout
    }
  }, [auth, role])

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
  
};
export const useAuth = () => {
  return useContext(AuthContext);
};
