import {Box, Flex, Image} from '@chakra-ui/react';
import {POKEMONS_COUNT, SPRITES, URL_ID} from "utils/constants";
import PokemonStats from "components/PokemonStats";
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage} from "next";
import fetchPokemonById from "networking/functions/fetch-pokemon-by-id";
import {ParsedUrlQuery} from "querystring";

interface Params extends ParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
    const paths = Array.from(Array(POKEMONS_COUNT).keys()).map(id => {
        return {
            params: {
                id: String(id + 1)
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<Awaited<ReturnType<typeof fetchPokemonById>>, Params> =
    async (context) => {
        const {id} = context.params!
        const data = await fetchPokemonById(parseInt(id))

        return {
            props: data
        }
    };

const Pokemon: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (pokemon) => {
    return (
        <Flex justifyContent="space-evenly" bg='blue.100' w={'100vw'} h={"100vh"}>
            <Flex direction="column" h="max-content" width="max-content">
                <Image objectFit="contain" src={SPRITES.OFFICIAL_ARTWORK.replace(URL_ID, String(pokemon.id))}
                       bgColor="lightgrey"
                       alt="Pokemon official artwork"
                       borderRadius={20}
                />
                <PokemonStats stats={pokemon.stats}/>
            </Flex>
            <Flex direction="column">
                <Box bg={"primary.600"} w="80%" h={"50px"}>
                    Height
                </Box>
            </Flex>
        </Flex>

    )
}

export default Pokemon