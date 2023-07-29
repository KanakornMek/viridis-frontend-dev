import { useContext, createContext, useState, useEffect } from "react";
import { viridisAuth } from "../api/axiosConfig";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          setAuth(JSON.parse(accessToken));
        }
        setIsLoading(false);
    }, []);

    const login = async (email, password) => {
        const res = await viridisAuth.post('/signin', {
            email,
            password
        })
        console.log(res.data);
        const acToken =res.data.accessToken
            localStorage.setItem('accessToken',JSON.stringify(acToken) );
            console.log(acToken)
            setAuth(acToken);
    }
    const logout = () => {
        localStorage.removeItem('accessToken');
        setAuth(null);
    };

    const authContextValue = {
        auth,
        login,
        logout,
        isLoading
    }
    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider}