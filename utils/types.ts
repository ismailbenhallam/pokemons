export interface NamedAPIResourceList {
    count: number,
    next: string,
    previous: string,
    results: Array<NamedAPIResource>
}

export interface NamedAPIResource {
    name: string,
    url: string,
}