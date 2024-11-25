import {useEffect, useMemo, useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, User} from "firebase/auth";
import {auth} from "../../fireabse.ts";
import { AuthContext } from "./AuthContext.tsx";

export const AuthProvider = ({children}: { children: React.ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const login = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    }

    const logout = async () => {
        await auth.signOut();
    }

    const signup = async (email: string, password: string) => {
        await createUserWithEmailAndPassword(auth, email, password);
    }

    // Declare memo for provider value
    // Login, Signup and logout functions are stable functions and do not need to be memoized
    const providerValue = useMemo(() => ({user, loading, login, logout, signup}), [user, loading]);


    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    )
}

