import { useState, useEffect } from "react";
import "./signup.css";
import SignUpForm from "./SignUpForm";
import SignUpOTPForm from "./SingUpOTPForm";
import WelcomeSplash from "../../../components/ui/organism/WelcomeSplash";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [registerationSuccess, setRegisterationSuccess] = useState({
        email: "",
        status: false,
    });
    const [otpVerifySuccess, setOtpVerifySuccess] = useState({
        email: "",
        status: false,
    });
    const navigate = useNavigate();

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (otpVerifySuccess.status) {
            timer = setTimeout(() => {
                navigate("/dashboard");
            }, 1000);
        }
        return () => {
            clearTimeout(timer as NodeJS.Timeout);
        };
    }, [otpVerifySuccess.status]);

    return (
        <div className="signUpContainer">
            {!registerationSuccess?.status && (
                <SignUpForm setRegisterationSuccess={setRegisterationSuccess} />
            )}
            {registerationSuccess?.status && !otpVerifySuccess.status && (
                <SignUpOTPForm
                    emailAddress={registerationSuccess.email}
                    setOtpVerifySuccess={setOtpVerifySuccess}
                />
            )}
            {registerationSuccess?.status && otpVerifySuccess.status && (
                <WelcomeSplash />
            )}
        </div>
    );
};

export default SignUp;
