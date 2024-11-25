import {createContext} from "react";
import {User} from "firebase/auth";


type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
    signup: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

