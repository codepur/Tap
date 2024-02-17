import { useState } from "react";
import { Container, Flex } from "@chakra-ui/react";
import ProfileEditForm from "./ProfileEditForm";
import ProfileInfo from "./ProfileInfo";

const ProfileSettings = ({ user }: any) => {
    const [isEdit, setIsEdit] = useState(false);

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
                {!isEdit && <ProfileInfo setIsEdit={setIsEdit} />}
                {isEdit && (
                    <ProfileEditForm user={user} setIsEdit={setIsEdit} />
                )}
            </Flex>
        </Container>
    );
};

export default ProfileSettings;
