import styled from "@emotion/styled";
import {Flex, Image, Text} from "@chakra-ui/react";
import PokemonStats from "../PokemonStats";

const leftColumnWidth = "470px"

export const StyledContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 15px;
`

export const StyledName = styled(Text)`
  font-size: 60px;
  font-family: Dancing Script, serif;
  text-transform: capitalize;
`

export const StyledPokemonImage = styled(Image)`
  object-fit: contain;
  background-color: lightgrey;
  width: ${leftColumnWidth};
  height: 430px;
  border-radius: 5px;
`

export const StyledPokemonStats = styled(PokemonStats)`
  width: ${leftColumnWidth};
`

export const StyledColumn = styled(Flex)`
  flex-direction: column;
  height: max-content;
  width: max-content;
  gap: 15px;
`