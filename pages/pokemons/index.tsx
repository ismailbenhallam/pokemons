import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {NamedAPIResourceList} from "utils/types";
import fetchAllPokemons from "networking/functions/fetch-all-pokemons";
import ErrorComponent from "../../components/ErrorComponent";
import PokeCard from "../../components/PokeCard";
import {Center, SimpleGrid} from "@chakra-ui/react";

export const getStaticProps: GetStaticProps<{ data: NamedAPIResourceList | null, error: Error | null }> = async () => {
    const {data, error} = await fetchAllPokemons()

    return {
        props: {data, error}
    }
};

const PokemonsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({data, error}) => {
    if (error || !data?.results.length) return (
        <Center height={"100vh"}>
            <div style={{
                width: "70vw"
            }}>
                <ErrorComponent title={"404"} message={"No Pokemon was found "}/>
            </div>
        </Center>
    )
    return <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={10}
                       bgColor={"primary.900"} px={10}>
        {data!.results.map((p, index) =>
            <PokeCard key={p.name} name={p.name} url={p.url} id={index + 1}/>)}
    </SimpleGrid>
}
export default PokemonsPage