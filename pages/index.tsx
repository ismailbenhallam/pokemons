import type {NextPage} from 'next'
import {Button, Image, Stack} from "@chakra-ui/react";
import Logo from "components/Logo";
import ROUTES from "utils/routes";
import Link from "next/link";
import Glass from "components/Glass";
import {BACKGROUND1_SRC} from "utils/constants";

const Home: NextPage = () => {
    return (
        <Stack direction="row" height={"100vh"} maxWidth={"100vw"} justifyContent={"center"} alignContent={"center"}>
            <Image src={BACKGROUND1_SRC} width={"100vw"} objectFit={"cover"}/>
            <Glass position="absolute" style={{
                margin: "auto",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                height: "max-content",
                textAlign: "center",
            }}>
                <Stack direction="column" alignItems="center">
                    <Logo/>
                    <Link href={ROUTES.POKEMONS}>
                        <Button
                            rounded={'full'}
                            fontSize={["xs", "md", "lg", "xl", "xl"]}
                            py={[2,]}
                            px={[3,]}
                            color="secondary.500"
                            bgColor="primary.500"
                        >
                            Get started
                        </Button>
                    </Link>
                </Stack>
            </Glass>
        </Stack>
    )
}

export default Home
