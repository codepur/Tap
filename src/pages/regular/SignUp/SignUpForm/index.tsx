import { useState } from "react";
import Input from "../../../../components/ui/atoms/formElements/Input";
import FormHeader from "../../../../components/ui/organism/FormHeader";
import FormFooter from "../../../../components/ui/organism/FormFooter";
import FormContainer from "../../../../components/ui/organism/FormContainer";
import "./signUpForm.css";
import { useForm, FormProvider } from "react-hook-form";
import { apiClient } from "../../../../config/apiClient";

const Form = ({ setRegisterationSuccess }: any) => {
    const [loading, setLoading] = useState(false);
    const methods = useForm();
    const { handleSubmit, watch } = methods;

    const onSubmit = async (data: any) => {
        setLoading(true);
        await createUser(data);
        console.log("data", data);
        setLoading(false);
    };

    // Validation rules
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const createUser = async (data: any) => {
        const { firstName, lastName, emailAddress, password, mobileNumber } =
            data;
        const payload = {
            firstName,
            lastName,
            emailAddress,
            password,
            mobileNumber,
            orgId: 1,
        };

        const resp = await apiClient.post(`/v1/user`, payload);
        const { data: respData } = resp;

        if (respData.statusCode === "0000") {
            setRegisterationSuccess({ email: emailAddress, status: true });
        }
    };

    return (
        <>
            <FormProvider {...methods}>
                <form
                    className="signUpForm"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <div className="signUpFormGroup">
                        <Input
                            name="firstName"
                            rules={{
                                required: {
                                    value: true,
                                    message: "First Name is required",
                                },
                            }}
                            placeHolder="Enter First Name"
                            defaultValue=""
                            width={"46%"}
                            withIcon
                        />
                        <Input
                            name="lastName"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Last Name is required",
                                },
                            }}
                            placeHolder="Enter Last Name"
                            defaultValue=""
                            width={"46%"}
                            withIcon
                        />
                    </div>
                    <div className="signUpFormGroup">
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
                            placeHolder="Enter Email"
                            withIcon
                        />
                    </div>
                    <div className="signUpFormGroup">
                        <Input
                            name="mobileNumber"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Mobile Number is required",
                                },
                            }}
                            defaultValue=""
                            placeHolder="Enter Phone Number"
                            withIcon
                        />
                    </div>
                    <div className="signUpFormGroup">
                        <Input
                            name="password"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                                pattern: passwordRegex,
                            }}
                            defaultValue=""
                            type={"password"}
                            placeHolder="Password"
                            width={"46%"}
                        />
                        <Input
                            name="confirmPassword"
                            rules={{
                                validate: (value: any) =>
                                    value === watch("password") ||
                                    "does not match",
                            }}
                            defaultValue=""
                            type={"password"}
                            placeHolder="Confirm Password"
                            width={"46%"}
                        />
                    </div>

                    <button
                        className="signUpButton"
                        type="submit"
                        style={{ margin: "34px 0 28px 0" }}
                        disabled={loading}
                    >
                        SIGN UP
                    </button>
                </form>
            </FormProvider>
        </>
    );
};

const SignUpForm = ({ setRegisterationSuccess }: any) => {
    return (
        <FormContainer>
            <FormHeader
                headerTypeText="Sign up to"
                subHeaderText="Welcome please enter your details"
            />
            <Form setRegisterationSuccess={setRegisterationSuccess} />
            <FormFooter
                footerTitle="Already have an account?"
                linkText="SIGN IN NOW"
            />
        </FormContainer>
    );
};

export default SignUpForm;
