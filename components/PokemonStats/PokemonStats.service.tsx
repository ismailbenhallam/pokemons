import {titleCase} from "utils/string-utils";

export const statName = (name: string) => {
    if(name == "hp")
        return name.toUpperCase()
    const parts = name.split("-")
    if (parts.length)
        return parts.reduce((previousValue, currentValue) => previousValue + titleCase(currentValue) + " ", "").trim()
    return titleCase(name)
}