import { Avatar, Flex, Text } from "@chakra-ui/react";
import "./profileInfo.scss";

const ProfileInfo = ({ setIsEdit }: any) => {
    const secTextSx = {
        color: "#949494",
        fontFamily: "Roboto",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "100%",
        letterSpacing: "0.178px",
    };
    const handleClick = (e: any) => {
        e.stopPropagation();
        setIsEdit(true);
    };
    return (
        <>
            <Flex justifyContent={"center"} mb={"40px"}>
                <Avatar borderRadius="md" boxSize="140px" />
            </Flex>
            <Flex
                w={"100%"}
                h={"100%"}
                justifyContent="center"
                alignItems={"center"}
                flexDirection={"column"}
            >
                <Flex
                    w={"100%"}
                    h={"100%"}
                    justifyContent="center"
                    alignItems={"center"}
                    flexDirection={"column"}
                    gap={"24px"}
                >
                    <Flex
                        w={"100%"}
                        h={"41.5px"}
                        borderBottom={"1px solid #DADADA"}
                        justifyContent="space-between"
                        alignItems={"center"}
                    >
                        <Text sx={secTextSx}>First Name</Text>
                        <Text sx={{ ...secTextSx, color: "#363636" }}>
                            First Name
                        </Text>
                    </Flex>
                    <Flex
                        w={"100%"}
                        h={"41.5px"}
                        borderBottom={"1px solid #DADADA"}
                        justifyContent="space-between"
                        alignItems={"center"}
                    >
                        <Text sx={secTextSx}>Last Name</Text>
                        <Text sx={{ ...secTextSx, color: "#363636" }}>
                            Last Name
                        </Text>
                    </Flex>
                    <Flex
                        w={"100%"}
                        h={"41.5px"}
                        borderBottom={"1px solid #DADADA"}
                        justifyContent="space-between"
                        alignItems={"center"}
                    >
                        <Text sx={secTextSx}>Phone Number</Text>
                        <Text sx={{ ...secTextSx, color: "#363636" }}>
                            Phone Number
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={"space-between"}
                        pt={"16px"}
                        w={"100%"}
                    >
                        <button className="updateProfileBackButton">
                            CLOSE
                        </button>
                        <button
                            className="updateProfileButton"
                            onClick={handleClick}
                        >
                            EDIT SETTINGS
                        </button>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default ProfileInfo;
