import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {SimpleGrid} from '@chakra-ui/react'
import {POKEAPI_SPECIES, POKEMONS_COUNT} from "utils/constants";
import axios, {AxiosResponse} from "axios";
import PokeCard from "components/PokeCard";
import {NamedAPIResource, NamedAPIResourceList} from "utils/types";

export const getStaticProps: GetStaticProps<{ data: Array<NamedAPIResource> }> = async () => {
    const response: AxiosResponse<NamedAPIResourceList> = await axios.get(`${POKEAPI_SPECIES}?offset=0&limit=${POKEMONS_COUNT}`)
    return {
        props: {
            data: response.data.results,
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