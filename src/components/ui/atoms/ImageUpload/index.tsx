import React, { useRef, ChangeEvent } from "react";
import { useToast, Flex, Img } from "@chakra-ui/react";
import EditableSquareAvatar from "../EditableSquareAvatar";

interface ImageUploadProps {
    onSubmit: (formData: FormData) => void;
    backgroundImage: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onSubmit,
    backgroundImage,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const toast = useToast();

    const handleImageUpload = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append("profileImage", file);
            onSubmit(formData);
            toast({
                title: "Image uploaded",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <Flex onClick={handleImageUpload}>
                <input
                    type="file"
                    ref={inputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                <EditableSquareAvatar src={backgroundImage} size="140px" />
            </Flex>
        </>
    );
};

export default ImageUpload;
