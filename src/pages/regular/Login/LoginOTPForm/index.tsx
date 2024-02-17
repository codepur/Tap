import FormHeader from "../../../../components/ui/organism/FormHeader";
import FormFooter from "../../../../components/ui/organism/FormFooter";
import FormContainer from "../../../../components/ui/organism/FormContainer";
import "./loginOTPForm.scss";
import OTPForm from "../../../../components/modules/OTPForm";
import { apiClient } from "../../../../config/apiClient";

const LoginOTPForm = ({ emailAddress, setLogInSuccess }: any) => {
    const handleOtpSubmit = async (otp = "") => {
        const payload = {
            emailAddress,
            otp,
        };

        const resp = await apiClient.post(`/v1/verifyotp`, payload);
        const { data: respData } = resp;
        if (respData.statusCode === "0000") {
            setLogInSuccess((prev: any) => ({
                ...prev,
                email: emailAddress,
                appStatus: true,
            }));
        }
    };
    return (
        <FormContainer>
            <FormHeader
                subHeaderText={`We have sent you an  OTP to <span class="loginEmailText">&lt;Email with first 3 digits&gt;</span>`}
            />
            <OTPForm inputLength={6} onSubmit={handleOtpSubmit} />
            <FormFooter
                footerTitle="Don't have an account?"
                linkText="SIGN UP NOW"
            />
        </FormContainer>
    );
};

export default LoginOTPForm;
