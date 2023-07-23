import { useContext, createContext, useState, useEffect } from "react";
import { viridisAuth } from "../api/axiosConfig";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          setAuth(JSON.parse(accessToken));
        }
    }, []);

    const login = (email, password) => {
        viridisAuth.post('/signin', {
            email,
            password
        }).then((res) => {
            const acToken =res.data.accessToken
            localStorage.setItem('accessToken',JSON.stringify(acToken) );
            console.log(acToken)
            setAuth(acToken);
        })  
    }
    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsAuthed(null);
    };

    const authContextValue = {
        auth,
        login,
        logout,
        isAuthenticated: !!auth,
    }
    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider}