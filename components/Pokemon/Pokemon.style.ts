import styled from "@emotion/styled";
import {Flex, Image, Text} from "@chakra-ui/react";
import PokemonStats from "./PokemonStats";
import theme from "../../utils/theme";

const leftColumnWidth = "400px"

export const StyledContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 0 15px 15px 15px;
  background-color: ${theme.colors.primary["800"]};
  @media (max-width: 768px) {
    padding: 0;
  }
`

export const StyledRows = styled(Flex)`
  flex-direction: column;
  background-color: white;
  align-items: center;
`

export const StyledName = styled(Text)`
  font-size: 60px;
  font-family: Dancing Script, serif;
  text-transform: capitalize;
`

export const StyledPokemonImage = styled(Image)`
  object-fit: contain;
  width: ${leftColumnWidth};
  border-radius: 5px;
  background-color: #ecebeb;
  max-width: 100vw;
`

export const StyledPokemonStats = styled(PokemonStats)`
  width: ${leftColumnWidth};
  height: 350px;
  max-width: 100vw;
`

export const StyledColumns = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;
  padding: 25px;
  gap: 40px;
  width: 70vw;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const StyledColumn = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  height: 100%;
`
