import "./login.scss";
import LoginForm from "./LoginForm";
import LoginOTPForm from "./LoginOTPForm";
import WelcomeSplash from "../../../components/ui/organism/WelcomeSplash";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [logInSuccess, setLogInSuccess] = useState({
        email: "",
        status: false,
        appStatus: false,
        otpStatus: false,
    });

    const navigate = useNavigate();

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (logInSuccess.appStatus) {
            timer = setTimeout(() => {
                navigate("/dashboard");
            }, 1000);
        }
        return () => {
            clearTimeout(timer as NodeJS.Timeout);
        };
    }, [logInSuccess.appStatus]);
    return (
        <div className="loginContainer">
            {!logInSuccess.status && (
                <LoginForm setLogInSuccess={setLogInSuccess} />
            )}
            {logInSuccess.status && logInSuccess.otpStatus && (
                <LoginOTPForm
                    emailAddress={logInSuccess.email}
                    setLogInSuccess={setLogInSuccess}
                />
            )}
            {logInSuccess.appStatus && <WelcomeSplash />}
        </div>
    );
};

export default Login;
