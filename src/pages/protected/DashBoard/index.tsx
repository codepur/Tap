import { Flex } from "@chakra-ui/react";
import Header from "../../../components/ui/organism/Header";
import Sidebar from "../../../components/ui/organism/Sidebar";
import AppCard from "../../../components/modules/AppCard";
import appIcon from "../../../assets/images/check-circle.jpeg";
import { useState } from "react";

const DashBoard = () => {
    const [navSize, changeNavSize] = useState("small");
    const dashBoardData = [
        {
            appIcon,
            headerTitle: "DRIVE",
            headerSubTitle:
                "Manage your file storage anytime, from anywhere, with AIR Drive",
            handleAppButtonClick: () => {},
        },
        {
            appIcon,
            headerTitle: "VAULT",
            headerSubTitle:
                "Get fully managed FTP and SFTP to securely manage cross-system file transfers with AIR Vault.",
            handleAppButtonClick: () => {},
        },
        {
            appIcon,
            headerTitle: "SCRAPEX",
            headerSubTitle:
                "AIR Scrapex is how ethical, and efficient data extraction supports research, lead generation, and analysis.",
            handleAppButtonClick: () => {},
        },
        {
            appIcon,
            headerTitle: "PROJECTS",
            headerSubTitle:
                "AIR Projects is a project management tool designed to enhance team coordination, task management, and progress tracking",
            handleAppButtonClick: () => {},
        },
        {
            appIcon,
            headerTitle: "ANALYTICS",
            headerSubTitle:
                "Experience cutting-edge integration, accurate and actionable insights, and top-tier data security.",
            handleAppButtonClick: () => {},
        },
        {
            appIcon,
            headerTitle: "ATLAS",
            headerSubTitle:
                "Experience transparent data integration with AIR Atlas.",
            handleAppButtonClick: () => {},
        },
    ];
    return (
        <Flex w="100%">
            <Sidebar navSize={navSize} />
            <Flex w={"100%"} flexDir="column">
                <Header headerTitle={""} />
                <Flex alignItems={"center"} h={"90vh"} p="16px">
                    <Flex
                        w={"100%"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        flexWrap={"wrap"}
                        gap={"18px"}
                    >
                        {dashBoardData.map((item, index) => {
                            const {
                                appIcon,
                                headerTitle,
                                headerSubTitle,
                                handleAppButtonClick,
                            } = item;
                            return (
                                <AppCard
                                    key={index}
                                    appIcon={appIcon}
                                    headerTitle={headerTitle}
                                    headerSubTitle={headerSubTitle}
                                    handleAppButtonClick={handleAppButtonClick}
                                />
                            );
                        })}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default DashBoard;
