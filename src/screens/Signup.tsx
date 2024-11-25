import {useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {signUpWithEmailAndPassword} from "../fireabse.ts";

export const Signup = () => {

    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        const email = target.email.value;
        const password = target.password.value;


        signUpWithEmailAndPassword(email, password)
            .then(() => navigate('/login', {state: {from: location}}))
            .catch((e) => {
                if (e instanceof Error) setError(e.message);
                else setError(`An unknown error occurred. ${String(e)}`);
            });
    }

    return (
        <>
            {error && <div className={"text-red-500"}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required/>

                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}
