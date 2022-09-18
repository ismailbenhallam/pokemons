import useFetch from "./use-fetch";
import {POKEAPI_SPECIES} from "utils/constants";
import {NamedAPIResourceList} from "utils/types";

const useFetchPokemons = () => useFetch<NamedAPIResourceList>(`${POKEAPI_SPECIES}?offset=0&limit=${30}`)

export default useFetchPokemons