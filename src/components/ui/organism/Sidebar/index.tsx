import React, { useState } from "react";
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ navSize }: any) {
    const navigate = useNavigate();

    const profileMenu = [
        {
            title: "Logout",
            handler: () => {
                navigate("/");
            },
        },
        {
            title: "Profile",
            handler: () => {
                navigate("/profile");
            },
        },
    ];
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = () => {
        // Implement your logout logic here
        console.log("Logout clicked");
    };

    return (
        <Flex
            pos="sticky"
            h="100vh"
            background={"#DADADA"}
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            w={navSize == "small" ? "72px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
                position={"absolute"}
                bottom="0"
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Menu autoSelect={false}>
                        <MenuButton
                            as={IconButton}
                            icon={<Avatar size="sm" />}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        />
                        <MenuList>
                            {profileMenu.map((item, index) => (
                                <MenuItem key={index} onClick={item.handler}>
                                    {item.title}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
    );
}
