import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {useAuth} from "../hooks/UseAuth.tsx";

export const Login = () => {

    const [error, setError] = useState<string | null>(null);

    const {user, login} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    // If the user is already logged in, redirect to home
    useEffect(() => {
        if (user) {
            const from = location.state?.from?.pathname || '/';
            navigate(from, {replace: true});
        }
    }, [user, navigate, location]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        const email = target.email.value;
        const password = target.password.value;

        try {
            login(email, password);
        } catch (e: unknown) {
            if (e instanceof Error) setError(e.message);
            else setError(`An unknown error occurred. ${String(e)}`);
        }
    }


    return (
        <>
            {error && <div className={"text-red-500"}>{error}</div>}

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required/>

                <button type="submit">Login</button>

                {/* Redirect to signup */}
                <button onClick={() => navigate('/signup', {state: {from: location}})}>Sign Up</button>
            </form>
        </>
    )


}

