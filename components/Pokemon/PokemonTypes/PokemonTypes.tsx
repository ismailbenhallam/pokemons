import {Flex, Text} from "@chakra-ui/react";
import {getType, Type as PokemonType} from "./PokemonTypes.service"

const PokemonTypes = (props: { types: string[] }) => {
    const {types} = props
    return (
        <>
            <Text fontSize="20px">{types.length ? "Types" : "Type"}</Text>
            <Flex gap="8px">
                {types.map(type => <Type key={type} type={getType(type)}/>)}
            </Flex>
        </>
    );
};

const Type = (props: { type: PokemonType }) => {
    const {type: {name, color, bgColors}} = props

    return <Text color={color} py="1" w="140px" borderRadius="5px" textAlign="center"
                 background={`linear-gradient(180deg, ${bgColors[0]} 50%, ${bgColors.length > 1 ? bgColors[1] : bgColors[0]} 50%)`}>
        {name}
    </Text>
}

export default PokemonTypes
