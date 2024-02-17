import FormHeader from "../../../components/ui/organism/FormHeader";
import FormFooter from "../../../components/ui/organism/FormFooter";
import FormContainer from "../../../components/ui/organism/FormContainer";
import "./forgetPasswordForm.scss";
import { useState } from "react";
import Input from "../../../components/ui/atoms/formElements/Input";
import { useForm, FormProvider } from "react-hook-form";

const Form = () => {
    const [loading, setLoading] = useState(false);
    const methods = useForm();
    const { handleSubmit } = methods;

    const onSubmit = (data: any) => {
        setLoading(true);
        console.log(data);
        setLoading(false);
    };
    return (
        <>
            <FormProvider {...methods}>
                <form
                    className="forgotPasswordForm"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    {" "}
                    <div className="forgotPasswordFormGroup">
                        <Input
                            name="emailAddress"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid Email",
                                },
                            }}
                            defaultValue=""
                            width={"90%"}
                            placeHolder="Enter Email"
                            withIcon
                        />
                    </div>
                    <div className="buttonContainer">
                        <button type="button" className="backButton">
                            <span>&lt; </span> GO BACK
                        </button>
                        <button className="resetButton" disabled={loading}>
                            YES, RESET
                        </button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};

const ForgetPassword = () => {
    const handleOtpSubmit = (otp = "") => {
        console.log("otp ==== ", otp);
    };
    return (
        <div className="forgetPasswordContainer">
            <FormContainer>
                <FormHeader
                    subHeaderText={`Are you sure you want to reset your password?`}
                />
                <Form />
                <FormFooter
                    footerTitle="Don't have an account?"
                    linkText="SIGN UP NOW"
                />
            </FormContainer>
        </div>
    );
};

export default ForgetPassword;
