import { useState, useRef, useEffect, forwardRef } from "react";
import "./otpForm.scss";

const OTPInput = forwardRef((props: any, ref: any) => {
    return <input className="otpInput" {...props} ref={ref} />;
});

const OTPForm = ({ inputLength = 0, onSubmit }: any) => {
    const [otp, setOtp] = useState(new Array(inputLength).fill(""));
    const inputRefs = useRef<any[]>(new Array(inputLength).fill(null));
    const handleChange = (event: any, index: number) => {
        let value = event.target.value;
        let newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp([...newOtp]);

        let combinedOtp = newOtp.join("");
        if (combinedOtp.length === 6) {
            onSubmit(combinedOtp);
        }

        if (value && index < inputLength - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[otp.indexOf("", index + 1)].focus();
        }
    };
    const handleKeyDown = (event: any, index: number) => {
        if (
            event.key === "Backspace" &&
            !otp[index] &&
            index > 0 &&
            inputRefs.current[index - 1]
        ) {
            inputRefs.current[index - 1].focus();
        }
    };
    const handleClick = (index: number) => {
        inputRefs.current[index].setSelectionRange(1, 1);
        // optional
        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    };

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    return (
        <>
            <form className="otpForm">
                {otp.map((value, index) => (
                    <OTPInput
                        key={index}
                        ref={(input) => (inputRefs.current[index] = input)}
                        value={value}
                        onChange={(event: any) => handleChange(event, index)}
                        onClick={() => handleClick(index)}
                        onKeyDown={(event: any) => handleKeyDown(event, index)}
                    />
                ))}
            </form>
            <div>
                <span className="resendCodeText">Didn't get the code? </span>
                <span className="resendText">RESEND</span>
            </div>
            <div className="buttonContainer">
                <button className="backButton">
                    <span>&lt; </span> GO BACK
                </button>
                <button className="verifyButton">VERIFY</button>
            </div>
        </>
    );
};

export default OTPForm;
