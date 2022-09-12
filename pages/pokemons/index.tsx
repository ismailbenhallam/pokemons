import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {SimpleGrid} from '@chakra-ui/react'
import {POKEAPI_SPECIES} from "../../constants";
import axios, {AxiosResponse} from "axios";
import PokeCard from "../../components/PokeCard";
import {NamedAPIResource, NamedAPIResourceList} from "../../types";

export const getStaticProps: GetStaticProps<{ data: Array<NamedAPIResource> }> = async () => {
    const response: AxiosResponse<NamedAPIResourceList> = await axios.get(`${POKEAPI_SPECIES}?offset=0&limit=40`)
    return {
        props: {
            data: response.data.results,
        }
    }
};

const PokemonsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({data}) => (
    <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={10}
                bgColor={"primary.900"}>
        {data.map((p, index) =>
            <PokeCard name={p.name} url={p.url} id={index + 1}/>)}
    </SimpleGrid>
)

export default PokemonsPage