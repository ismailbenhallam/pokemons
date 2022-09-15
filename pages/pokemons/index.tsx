import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {SimpleGrid} from '@chakra-ui/react'
import PokeCard from "components/PokeCard";
import {NamedAPIResource} from "utils/types";
import fetchAllPokemons from "networking/functions/fetch-all-pokemons";

export const getStaticProps: GetStaticProps<{ data: Array<NamedAPIResource> }> = async () => {
    const response = await fetchAllPokemons()
    return {
        props: {
            data: response.results
        }
    }
};

const PokemonsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({data}) => (
    <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={10}
                bgColor={"primary.900"} px={10}>
        {data.map((p, index) =>
            <PokeCard key={p.name} name={p.name} url={p.url} id={index + 1}/>)}
    </SimpleGrid>
)

export default PokemonsPage