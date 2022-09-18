import {Pokemon} from "utils/types";
import {POKEAPI_POKEMONS} from "utils/constants";
import apiFetch from "./api-fetch";

const fetchPokemonById = (id: number) => {
    return apiFetch<Pokemon>(`${POKEAPI_POKEMONS}/${id}`)
}

export default fetchPokemonById