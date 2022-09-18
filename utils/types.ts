export interface NamedAPIResource {
    name: string,
    url: string,
}

export interface NamedAPIResourceList {
    count: number,
    next: string,
    previous: string,
    results: Array<NamedAPIResource>
}

export interface PokemonStat {
    stat: NamedAPIResource,
    effort: number,
    base_stat: number,
}

export interface PokemonType {
    type: NamedAPIResource,
    slot: number,
}

export interface PokemonAbility {
    is_hidden: boolean
    slot: number
    ability: NamedAPIResource
}

export interface PokemonMove {
    move: NamedAPIResource
}

export interface Pokemon {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: PokemonAbility[]
    forms: NamedAPIResource[]
    moves: PokemonMove[]
    stats: PokemonStat[]
    types: PokemonType[]
}