export const types: Type[] = [
    {
        name: "Bug",
        color: "white",
        bgColors: ["#729f3f"]
    },
    {
        name: "Dark",
        color: "white",
        bgColors: ["#707070"]
    },
    {
        name: "Dragon",
        color: "white",
        bgColors: ["#53a4cf", "#f16e57"]
    },
    {
        name: "Electric",
        color: "white",
        bgColors: ["#eed535"]
    },
    {
        name: "Fairy",
        color: "black",
        bgColors: ["#fdb9e9"]
    },
    {
        name: "Fighting",
        color: "white",
        bgColors: ["#d56723"]
    },
    {
        name: "Fire",
        color: "white",
        bgColors: ["#fd7d24"]
    },
    {
        name: "Flying",
        color: "black",
        bgColors: ["#3dc7ef", "#bdb9b8"]
    },
    {
        name: "Ghost",
        color: "white",
        bgColors: ["#7b62a3"]
    },
    {
        name: "Grass",
        color: "black",
        bgColors: ["#9bcc50"]
    },
    {
        name: "Ground",
        color: "black",
        bgColors: ["#f7de3f", "#ab9842"]
    },
    {
        name: "Ice",
        color: "black",
        bgColors: ["#51c4e7"]
    },
    {
        name: "Normal",
        color: "black",
        bgColors: ["#a4acaf"]
    },
    {
        name: "Poison",
        color: "white",
        bgColors: ["#b97fc9"]
    },
    {
        name: "Psychic",
        color: "white",
        bgColors: ["#f366b9"]
    },
    {
        name: "Rock",
        color: "white",
        bgColors: ["#a38c21"]
    },
    {
        name: "Steel",
        color: "black",
        bgColors: ["#9eb7b8"]
    },
    {
        name: "Water",
        color: "white",
        bgColors: ["#4592c4"]
    },
]

export interface Type {
    name: string
    color: string
    bgColors: string[]
}

export const getType = (name: string) => types.filter(t => t.name.toLowerCase() == name.toLowerCase())[0]
