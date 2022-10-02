import type {NextPage} from 'next'
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react";
import {POKEBALL} from "../utils/constants";
import Glass from "../components/Glass";
import styled from "@emotion/styled";
import Link from "next/link";
import ROUTES from "../utils/routes";


const StyledNumber = styled(Text)`
  font-size: 300px;
  line-height: 300px;
`

const StyledNotFoundText = styled(Text)`
  font-size: 40px;
  margin: 50px 0;
  color: grey;
  font-style: oblique;
  font-weight: bold;
`

const StyledButton = styled(Button)`
  font-size: 25px;
  padding: 30px;
`

const NotFound: NextPage = () => {


    return (
        <Box w="100vw" h="100vh" bg={"#EAA2A1"}>
            <Glass position="absolute" style={{
                margin: "auto",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                height: "max-content",
                textAlign: "center"
            }}>
                <Flex w="100%" justifyContent={"center"} gap="20px" alignItems="center">
                    <StyledNumber>4</StyledNumber>
                    <Image src={POKEBALL} alt="Pokeball" objectFit="contain" w="120px" h="120px"/>
                    <StyledNumber>4</StyledNumber>
                </Flex>
                <StyledNotFoundText>PAGE NOT FOUND</StyledNotFoundText>
                <Link href={ROUTES.POKEMONS}>
                    <StyledButton bg="primary.500" color="secondary.500">Go to Pokedex</StyledButton>
                </Link>
            </Glass>
        </Box>
    )
}

export default NotFound
