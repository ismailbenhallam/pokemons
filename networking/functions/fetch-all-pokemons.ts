import {NamedAPIResourceList} from "utils/types";
import {POKEAPI_POKEMONS, POKEMONS_COUNT} from "utils/constants";
import apiFetch from "./api-fetch";

const fetchAllPokemons = () => {
    return apiFetch<NamedAPIResourceList>(`${POKEAPI_POKEMONS}?offset=0&limit=${POKEMONS_COUNT}`)
}

export default fetchAllPokemons