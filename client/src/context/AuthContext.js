import { createContext } from "react";

function deff() {};

export const AuthContext = createContext({
    token: null,
    userId: null,
    login:deff,
    logout:deff,
    isAuthenticated: false
});