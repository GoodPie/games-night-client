import {AuthProvider} from "./context/auth/AuthProvider.tsx";
import {Route, Routes} from "react-router";
import {RequireAuth} from "./components/UseAuth.tsx";
import {Home} from "./screens/Home.tsx";
import {Login} from "./screens/Login.tsx";
import {Signup} from "./screens/Signup.tsx";

export default function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <Home/>
                        </RequireAuth>
                    }
                />
                {/* other routes */}
            </Routes>
        </AuthProvider>
    );
}
