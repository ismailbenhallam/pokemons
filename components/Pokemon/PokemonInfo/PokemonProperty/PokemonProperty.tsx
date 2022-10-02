import {titleCase} from "utils/string-utils";
import {StyledContainer, StyledProperties, StyledPropertyName, StyledPropertyValue} from "./PokemonProperty.style";

interface PokemonPropertyProps {
    name: string
    value: string | string[]
}

const PokemonProperty = (props: PokemonPropertyProps) => {
    const {name, value} = props
    const isArray = Array.isArray(value);

    return <StyledContainer>
        <StyledPropertyName>{titleCase(name)}</StyledPropertyName>
        {isArray ?
            <StyledProperties>
                {value.map(v => <StyledPropertyValue key={v}>{titleCase(v)}</StyledPropertyValue>)}
            </StyledProperties>
            : <StyledPropertyValue>{titleCase(value)}</StyledPropertyValue>
        }
    </StyledContainer>
};
export default PokemonProperty