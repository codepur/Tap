import { Flex, Text } from "@chakra-ui/react";

const Header = ({ headerTitle }: any) => {
    const textStyle = {
        color: "#363636",
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "100%",
    };

    return (
        <Flex w={"100%"} h={"28px"} pos="sticky" p={"16px"} pb={"24px"}>
            <Text sx={textStyle}>{headerTitle}</Text>
        </Flex>
    );
};

export default Header;
