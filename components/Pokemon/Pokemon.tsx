import {Flex} from '@chakra-ui/react';
import {Pokemon} from "utils/types";
import {SPRITES, URL_ID} from "../../utils/constants";
import {heightFormatter, weightFormatter} from "./Pokemon.service";
import {StyledColumn, StyledContainer, StyledName, StyledPokemonImage, StyledPokemonStats} from "./Pokemon.style";

export default (props: { pokemon: Pokemon }) => {
    const {pokemon} = props

    return (
        <StyledContainer>
            <StyledName>{pokemon.name}</StyledName>
            <Flex justifyContent="space-evenly" w={'100vw'} h={"100vh"}>
                <StyledColumn>
                    <StyledPokemonImage
                        src={SPRITES.OFFICIAL_ARTWORK.replace(URL_ID, String(pokemon.id))}
                        alt="Pokemon official artwork"
                    />
                    <StyledPokemonStats stats={pokemon.stats} />
                </StyledColumn>
                <StyledColumn direction="column">
                    <Flex h={"50px"}>
                        weight: {weightFormatter.format(pokemon.weight / 10)} <br/>
                        height: {heightFormatter.format(pokemon.height * 10)} <br/>
                        <Flex direction="column" w={"100%"}>
                            {pokemon.abilities.map(ability =>
                                <div>{ability.ability.name}</div>
                            )}
                        </Flex>
                        <Flex direction="column" w={"100%"}>
                            {pokemon.types.map(type =>
                                <div>{type.type.name}</div>
                            )}
                        </Flex>
                    </Flex>
                </StyledColumn>
            </Flex>
        </StyledContainer>
    );
}