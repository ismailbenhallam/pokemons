import {Pokemon} from "utils/types";
import {StyledContainer} from "./PokemonInfo.style";
import {heightFormatter, weightFormatter} from "./PokemonInfo.service";
import PokemonProperty from "./PokemonProperty";

export type PokemonInfoProps = Pick<Pokemon, "weight" | "height" | "abilities">

interface Props {
    info: PokemonInfoProps
}

export default (props: Props) => {
    const {info} = props
    return (
        <StyledContainer>
            <PokemonProperty name={"Height"} value={heightFormatter.format(info.height)}/>
            <PokemonProperty name={"Abilities"} value={info.abilities.map(t => t.ability.name)}/>
            <PokemonProperty name={"Weight"} value={weightFormatter.format(info.weight)}/>
        </StyledContainer>
    );
}

