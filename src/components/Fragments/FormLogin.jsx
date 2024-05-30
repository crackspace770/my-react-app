import InputForm  from "../Elements/Input/";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
    
    const [loginFailed, setLoginFailed] = useState(null);
    const usernameRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();

        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        };

        login(data, (status, response) => {
            if (status) {
                localStorage.setItem('token', response.token);
                window.location.href = '/product';
            } else {
                setLoginFailed(response.data.message);
                console.error(response.data.message);
            }
        });
    };

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label="Username"
                type="text"
                placeholder="John Doe"
                name="username"
                ref={usernameRef}
            />
            <InputForm
                label="Password"
                type="password"
                placeholder="******"
                name="password"
            />
            <Button className="bg-blue-500 w-full" type="submit">
                Login
            </Button>
            {loginFailed && <p className="text-red-500 text-center">{loginFailed}</p>}
        </form>
    );
};

export default FormLogin;

