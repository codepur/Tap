import FormHeader from "../../../../components/ui/organism/FormHeader";
import FormFooter from "../../../../components/ui/organism/FormFooter";
import FormContainer from "../../../../components/ui/organism/FormContainer";
import "./otpForm.css";
import OTPForm from "../../../../components/modules/OTPForm";
import { apiClient } from "../../../../config/apiClient";

const SingUpOTPForm = ({ emailAddress, setOtpVerifySuccess }: any) => {
    const handleOtpSubmit = async (otp = "") => {
        const payload = {
            emailAddress,
            otp,
        };

        const resp = await apiClient.post(`/v1/verifyotp`, payload);
        const { data: respData } = resp;
        if (respData.statusCode === "0000") {
            setOtpVerifySuccess({ email: emailAddress, status: true });
        }

        console.log("resp ====> ", respData);
    };
    return (
        <FormContainer>
            <FormHeader
                headerTypeText="Sign up to"
                subHeaderText={`We have sent you an  OTP to <span class="signUpEmailText">&lt;Email&gt;</span>`}
            />
            <OTPForm inputLength={6} onSubmit={handleOtpSubmit} />
            <FormFooter
                footerTitle="Already have an account?"
                linkText="SIGN IN NOW"
            />
        </FormContainer>
    );
};

export default SingUpOTPForm;
