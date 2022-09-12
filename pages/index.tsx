import type {NextPage} from 'next'
import {Button, Center, Stack} from "@chakra-ui/react";
import Logo from "../components/Logo";
import ROUTES from "../routes";
import Link from "next/link";
import Glass from "../components/Glass";
import {BACKGROUND1_SRC} from "../constants";

const Home: NextPage = () => {
    return (
        <Center h='100vh' w='100vw' bgRepeat={"no-repeat"}
                bgImage={BACKGROUND1_SRC}>
            <Glass>
                <Stack direction="column" alignItems="center">
                    <Logo style={{
                        width: "80%",
                        maxWidth: "650px"
                    }}/>
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
        </Center>

    )
}

export default Home
