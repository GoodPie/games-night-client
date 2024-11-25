import {useContext} from "react";
import {AuthContext} from "../context/auth/AuthContext.tsx";

/**
 * Custom hook to use the AuthContext
 * @returns AuthContext
 */
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
