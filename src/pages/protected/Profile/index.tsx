import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfileComponent from "../../../components/modules/ProfileComponents";
import Header from "../../../components/ui/organism/Header";
import Sidebar from "../../../components/ui/organism/Sidebar";

const Profile = () => {
    const [navSize, changeNavSize] = useState("small");
    const [user, setUser] = useState(null);

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem("userData") as string);
        if (userData) {
            setUser(userData);
        }
    }, []);

    return (
        <Flex w="100%">
            <Sidebar navSize={navSize} />
            <Flex w={"100%"} flexDir="column">
                <Header headerTitle={"Settings"} />
                <ProfileComponent user={user} />
            </Flex>
        </Flex>
    );
};

export default Profile;
