import {Box, Flex, Text} from "@chakra-ui/react";
import styled from "@emotion/styled";

export const StyledContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background-color: darkgrey;
  padding: 20px 25px 25px;
`

export const StyledTitle = styled(Text)`
  font-size: x-large;
`

export const StyledFlexContainer = styled(Flex)`
  gap: 10px;
  height: 350px;
  width: 450px;
  max-width: 100%;
`

const ReversedColumnsWithMaxH = styled(Flex)`
  flex-direction: column-reverse;
  height: 100%;
`

export const StyledStatContainer = styled(ReversedColumnsWithMaxH)`
  flex: 1;
  align-items: center;
`

export const StyledHalfFilledCellContainer = styled(ReversedColumnsWithMaxH)`
  background-color: white;
  width: 100%;
  height: auto;
  flex: 1 1 auto;
`

export const StyledStatBarContainer = styled(ReversedColumnsWithMaxH)`
  width: 100%;
  gap: 10px;
`

export const StyledStatName = styled(Text)`
  font-size: 17px;
  text-align: center;
  font-weight: bold;
`

export const StyledCell = styled(Box)`
  width: 100%;
`