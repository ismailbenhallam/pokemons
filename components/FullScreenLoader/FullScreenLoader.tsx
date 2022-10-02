import { Flex, Spinner } from "@chakra-ui/react";

const FullScreenLoader = () => {
    return (
        <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h={"100vh"}
            w={"100vw"}
        bgColor="primary.500">
            <Spinner size="xl" color="secondary.500" thickness="5px" />
        </Flex>
    );
};

export default FullScreenLoader;