import {Button, Container, Flex, Stack, Text,} from '@chakra-ui/react';
import {useRouter} from "next/router";
import ROUTES from "../../routes";

export default function Hero() {
    const router = useRouter()

    const handleOnClick = async () => {
        await router.push(ROUTES.POKEMONS)
    };

    return (
        <Container maxW={'5xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{base: 8, md: 10}}
                py={{base: 20, md: 28}}>
                <Flex w={'full'}>
                    <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.png"
                         alt="PokeApi logo"/>
                </Flex>
                <Text color={'gray.500'} maxW={'3xl'}>
                    All the Pokémon data you'll ever need in one place
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <Button
                        rounded={'full'}
                        px={6}
                        color="secondary.500"
                        bgColor="primary.500"
                        onClick={handleOnClick}
                    >
                        Get started
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
}
