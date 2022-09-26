import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage} from "next";
import fetchPokemonById from "networking/functions/fetch-pokemon-by-id";
import {ParsedUrlQuery} from "querystring";
import fetchAllPokemons from "networking/functions/fetch-all-pokemons";
import {getIdFromUrl} from "utils/string-utils";
import Pokemon from "components/Pokemon";

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

const PokemonPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (pokemon) => {
    return (
        <Pokemon pokemon={pokemon}/>
    )
}

export default PokemonPage