import useFetch from "./use-fetch";
import {POKEAPI_SPECIES, POKEMONS_COUNT} from "../../utils/constants";
import {NamedAPIResourceList} from "../../utils/types";

const useFetchPokemons = () => useFetch<NamedAPIResourceList>(`${POKEAPI_SPECIES}?offset=0&limit=${POKEMONS_COUNT}`)

export default useFetchPokemons