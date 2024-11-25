import {Navigate, useLocation} from "react-router";
import React from "react";
import {useAuth} from "../hooks/UseAuth.tsx";

export const RequireAuth = ({children}: { children: React.ReactNode }) => {
    const {user} = useAuth();
    const location = useLocation();

    if (!user) {
        return (
            <Navigate to="/login" state={{from: location}}/>
        )
    }

    return children;

}
