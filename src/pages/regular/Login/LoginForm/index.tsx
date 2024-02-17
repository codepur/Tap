import { useState } from "react";
import Input from "../../../../components/ui/atoms/formElements/Input";
import FormHeader from "../../../../components/ui/organism/FormHeader";
import FormFooter from "../../../../components/ui/organism/FormFooter";
import FormContainer from "../../../../components/ui/organism/FormContainer";
import { useForm, FormProvider } from "react-hook-form";
import { apiClient } from "../../../../config/apiClient";
import "./loginForm.scss";

const Form = ({ setLogInSuccess }: any) => {
    const [loading, setLoading] = useState(false);
    const methods = useForm();
    const { handleSubmit } = methods;

    const onSubmit = async (data: any) => {
        setLoading(true);
        await loginUser(data);
        setLoading(false);
    };

    const loginUser = async (data: any) => {
        const { emailAddress, password } = data;
        const payload = {
            emailAddress,
            password,
        };

        const resp = await apiClient.post(`/v1/user/login`, payload);
        const { data: respData } = resp;

        if (respData.statusCode === "0000") {
            localStorage.setItem(
                "userData",
                JSON.stringify(resp?.data?.result)
            );
            setLogInSuccess((prev: any) => ({
                ...prev,
                email: emailAddress,
                status: true,
                appStatus: true,
            }));
        } else if (respData.statusCode === "2FA") {
            setLogInSuccess((prev: any) => ({
                ...prev,
                email: emailAddress,
                status: true,
                otpStatus: true,
            }));
        }
    };
    return (
        <>
            <FormProvider {...methods}>
                <form
                    className="loginForm"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    {" "}
                    <div className="loginFormGroup">
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
                    <div className="loginFormGroup">
                        <Input
                            name="password"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                            }}
                            defaultValue=""
                            type={"password"}
                            placeHolder="Password"
                            width={"90%"}
                        />
                    </div>
                    <div className="forgetPasswordText">FORGET PASSWORD?</div>
                    <button
                        className="loginButton"
                        style={{ margin: "20px 0 28px 0" }}
                    >
                        SIGN IN
                    </button>
                </form>
            </FormProvider>
        </>
    );
};

const LoginForm = ({ setLogInSuccess }: any) => {
    return (
        <FormContainer>
            <FormHeader
                headerTypeText="Sign in to"
                subHeaderText="Welcome back! please enter your details"
            />
            <Form setLogInSuccess={setLogInSuccess} />
            <FormFooter
                footerTitle="Don't have an account?"
                linkText="SIGN UP NOW"
            />
        </FormContainer>
    );
};

export default LoginForm;
