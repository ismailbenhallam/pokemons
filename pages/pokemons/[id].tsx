import {Box, Flex, Image} from '@chakra-ui/react';
import {SPRITES, URL_ID} from "utils/constants";
import PokemonStats from "components/PokemonStats";
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage} from "next";
import fetchPokemonById from "networking/functions/fetch-pokemon-by-id";
import {ParsedUrlQuery} from "querystring";
import fetchAllPokemons from "../../networking/functions/fetch-all-pokemons";
import {getIdFromUrl} from "../../utils/string-utils";

interface Params extends ParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const response = await fetchAllPokemons()
    const paths = response.results.map(namedAPIResource => {
        const id = getIdFromUrl(namedAPIResource.url)
        return {
            params: {id}
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