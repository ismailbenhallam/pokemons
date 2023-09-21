import {Box, Center, Heading, Image, Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import {getIdFromUrl, titleCase} from "utils/string-utils";
import {PIKACHU_LOADING_GIF, POKEBALL, SPRITES, URL_ID} from "utils/constants";
import NextLink from "next/link";
import ROUTES from "utils/routes";
import {NamedAPIResource} from "utils/types";
import {idFormatter} from "./PokeCard.service";

const PokeCard = (props: NamedAPIResource) => {
    const {url} = props
    const id = getIdFromUrl(url)

    return <Center py={6} transition="all .25s ease" _hover={{transform: 'scale(1.01)'}}>
        <Box border={"1px solid black"}
             maxW={'320px'}
             w={'full'}
             bg={useColorModeValue('white', 'gray.900')}
             boxShadow={'2xl'}
             rounded={'xl'}
             p={5}
             textAlign={'center'}>
            <Image
                src={
                    SPRITES.OFFICIAL_ARTWORK.replace(URL_ID, String(id))
                }
                fallbackSrc={PIKACHU_LOADING_GIF}
                alt={props.name}
                bgColor={"white"}
                mb={4}
                pos={'relative'}
            />
            <Text mb={4} textAlign="left" color="grey">#{idFormatter.format(parseInt(id))}</Text>
            <Heading fontSize={'33px'} fontFamily={'mongo'} mb={3}>
                {titleCase(props.name)}
            </Heading>
            <Stack direction={'row'} spacing={4} justifyContent="center">
                <NextLink href={`${ROUTES.POKEMONS}/${id}`}>
                    <Image
                        cursor="pointer"
                        src={POKEBALL}
                        boxSize='40px'
                        transition="all .25s ease" _hover={{transform: 'scale(1.3)'}}
                        alt="Pokeball"
                    />
                </NextLink>
            </Stack>
        </Box>
    </Center>
}

export default PokeCard