export const titleCase = (value: string) => value[0].toUpperCase() + value.substring(1)

export const getIdFromUrl = (url: string) => {
    const paths = url.split("/");
    return paths[paths.length - 2]
}