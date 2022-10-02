import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import fetchAllPokemons from "networking/functions/fetch-all-pokemons";
import PokeCard from "components/PokeCard";
import {SimpleGrid} from "@chakra-ui/react";

export const getStaticProps: GetStaticProps<Awaited<ReturnType<typeof fetchAllPokemons>>> = async () => {
    const data = await fetchAllPokemons()
    return {
        props: data
    }
};

const PokemonsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (namedAPIResourceList) => {
    const {results} = namedAPIResourceList

    return <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={10}
                       bgColor={"primary.500"} px={10}>
        {results.map((p) =>
            <PokeCard key={p.name} name={p.name} url={p.url}/>)}
    </SimpleGrid>
}
export default PokemonsPage