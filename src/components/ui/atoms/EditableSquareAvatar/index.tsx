import { Avatar, Box, Flex, Img, Text } from "@chakra-ui/react";
import editIcon from "../../../../assets/icons/editIcon.png";

const EditableSquareAvatar = ({ src, name, size }: any) => {
    const editTextSx = {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: "10px",
        fontWeight: "700",
        lineHeight: "100%",
        letterSpacing: "0.178px",
    };
    const dimTextSx = {
        color: "#DADADA",
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: "10px",
        fontWeight: "500",
        lineHeight: "100%",
        letterSpacing: "0.178px",
    };
    return (
        <Flex
            position="relative"
            alignItems="center"
            justifyContent="center"
            boxSize={size}
        >
            <Avatar name={name} src={src} borderRadius="md" boxSize="100%" />
            <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                backgroundColor="rgba(0, 0, 0, 0.5)"
                borderRadius="md"
                opacity="1"
                transition="opacity 0.3s ease-in-out"
                _hover={{ opacity: 1 }}
            >
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    gap={"4px"}
                >
                    <Img src={editIcon} w="45px" h={"45px"} />
                    <Text sx={editTextSx}>Click to Change Picture</Text>
                    <Text sx={dimTextSx}>Photo Dimention</Text>
                    <Text sx={dimTextSx}>Width: 140px</Text>
                    <Text sx={dimTextSx}>Height: 140px</Text>
                </Flex>
            </Box>
        </Flex>
    );
};

export default EditableSquareAvatar;
