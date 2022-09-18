import useFetch from "./use-fetch";
import {POKEAPI_POKEMONS} from "utils/constants";
import {Pokemon} from "utils/types";

const useFetchPokemonById = (id: number) => useFetch<Pokemon>(`${POKEAPI_POKEMONS}/${id}`)

export default useFetchPokemonById