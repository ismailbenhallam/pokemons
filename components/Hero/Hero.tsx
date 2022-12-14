import {Button, Flex, Stack, Text,} from '@chakra-ui/react';
import ROUTES from "utils/routes";
import Link from "next/link";
import Image from "next/image";
import {LOGO_SRC} from "utils/constants";

const Hero = () => (
    <Stack maxW={'5xl'}
           textAlign={'center'}
           align={'center'}
           spacing={{base: 8, md: 10}}
           py={{base: 20, md: 28}}>
        <Flex w={'full'}>
            <Image src={LOGO_SRC} alt="PokeApi logo"/>
        </Flex>
        <Text color={'gray.500'} maxW={'3xl'}>
            All the Pokémon data you&apos;ll ever need in one place
        </Text>
        <Stack spacing={6} direction={'row'}>
            <Link href={ROUTES.POKEMONS}>
                <Button
                    rounded={'full'}
                    px={6}
                    color="secondary.500"
                    bgColor="primary.500">
                    Get started
                </Button>
            </Link>
        </Stack>
    </Stack>
)


export default Hero