import { useState } from "react";
import "./profileEditForm.scss";
import { Flex, useToast } from "@chakra-ui/react";
import Input from "../../../../../ui/atoms/formElements/Input";
import { useForm, FormProvider } from "react-hook-form";
import { apiClient } from "../../../../../../config/apiClient";
import ImageUpload from "../../../../../ui/atoms/ImageUpload";
import circleUI from "../../../../../../assets/images/check-circle.jpeg";

const ProfileEditForm = ({ user, setIsEdit }: any) => {
    const [loading, setLoading] = useState(false);
    const [imageFormData, setImageFormData] = useState<FormData | null>(null);
    const toast = useToast();
    const handleImageUpload = (formData: FormData) => {
        setImageFormData(formData);
    };
    const methods = useForm();
    const { handleSubmit } = methods;

    const handleBack = (e: any) => {
        e.stopPropagation();
        setIsEdit(false);
    };

    const onSubmit = async (data: any) => {
        setLoading(true);
        console.log(data);
        setLoading(false);

        if (imageFormData) {
            const response = await apiClient.post(
                `/v1/user/uploadProfileImage/${user?.id}`,
                imageFormData,
                {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    },
                }
            );
            console.log("Image upload successful:", response.data);

            toast({
                title: "Profile Updated",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <Flex justifyContent={"center"} mb={"40px"}>
                <ImageUpload
                    onSubmit={handleImageUpload}
                    backgroundImage={circleUI}
                />
            </Flex>
            <FormProvider {...methods}>
                <form
                    className="updateProfileForm"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <div className="updateProfileFormGroup">
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
                            width={"90%"}
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
                            width={"90%"}
                        />
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
                            width={"90%"}
                        />
                        <Flex
                            justifyContent={"space-between"}
                            pt={"16px"}
                            w={"100%"}
                        >
                            <button
                                className="updateProfileBackButton"
                                type="button"
                                onClick={handleBack}
                            >
                                BACK
                            </button>
                            <button
                                className="updateProfileButton"
                                type="submit"
                            >
                                SAVE CHANGE
                            </button>
                        </Flex>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};

export default ProfileEditForm;
