import {NamedAPIResourceList} from "utils/types";
import {POKEAPI_SPECIES, POKEMONS_COUNT} from "utils/constants";
import apiFetch from "./api-fetch";

const fetchAllPokemons = () => {
    return apiFetch<NamedAPIResourceList>(`${POKEAPI_SPECIES}?offset=0&limit=${POKEMONS_COUNT}`)
}

export default fetchAllPokemons