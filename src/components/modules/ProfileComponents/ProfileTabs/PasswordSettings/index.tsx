import { useState } from "react";
import "./passwordSettings.scss";
import { Container, Flex, useToast, Avatar } from "@chakra-ui/react";
import Input from "../../../../ui/atoms/formElements/Input";
import { useForm, FormProvider } from "react-hook-form";

const PasswordSettings = ({ user }: any) => {
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const methods = useForm();
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = methods;

    const onSubmit = async (data: any) => {
        setLoading(true);
        console.log(data);
        setLoading(false);
    };

    return (
        <Container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"80vh"}
        >
            <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                minW={"400px"}
            >
                <Flex justifyContent={"center"} mb={"40px"}>
                    <Avatar borderRadius="md" boxSize="140px" />
                </Flex>
                <FormProvider {...methods}>
                    <form
                        className="updatePasswordForm"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        <div className="updatePasswordFormGroup">
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
                            <Input
                                name="newpassword"
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                }}
                                defaultValue=""
                                type={"password"}
                                placeHolder="Enter Password"
                                width={"90%"}
                            />
                            <Input
                                name="confirmPassword"
                                rules={{
                                    validate: (value: any) =>
                                        value === watch("newpassword") ||
                                        "does not match",
                                }}
                                defaultValue=""
                                type={"password"}
                                placeHolder="Confirm Password"
                                width={"90%"}
                            />
                            <Flex pt={"16px"} w={"100%"}>
                                <button
                                    className="updatePasswordButton"
                                    type="submit"
                                >
                                    Change Password
                                </button>
                            </Flex>
                        </div>
                    </form>
                </FormProvider>
            </Flex>
        </Container>
    );
};

export default PasswordSettings;
