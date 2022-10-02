import {Pokemon} from "utils/types";
import {SPRITES, URL_ID} from "utils/constants";
import {
    StyledColumn,
    StyledColumns,
    StyledContainer,
    StyledName,
    StyledPokemonImage,
    StyledPokemonStats,
    StyledRows
} from "./Pokemon.style";
import PokemonInfo from "./PokemonInfo";
import {PokemonInfoProps} from "./PokemonInfo/PokemonInfo";
import PokemonTypes from "./PokemonTypes";

interface Props {
    pokemon: Pokemon
}

const Pokemon = (props: Props) => {
    const {pokemon: {id, name, height, abilities, weight, types, stats}} = props
    const pokemonTypes = types.map(t => t.type.name);

    const info: PokemonInfoProps = {
        weight: weight,
        height: height,
        abilities: abilities,
    };

    return (
        <StyledContainer>
            <StyledRows>
                <StyledName>{name}</StyledName>
                <StyledColumns>
                    <StyledColumn>
                        <StyledPokemonImage
                            src={SPRITES.OFFICIAL_ARTWORK.replace(URL_ID, String(id))}
                            alt="Pokemon official artwork"
                        />
                        <StyledPokemonStats stats={stats}/>
                    </StyledColumn>
                    <StyledColumn>
                        <PokemonInfo info={info}/>
                        <PokemonTypes types={pokemonTypes}/>
                    </StyledColumn>
                </StyledColumns>
            </StyledRows>
        </StyledContainer>
    );
};
export default Pokemon