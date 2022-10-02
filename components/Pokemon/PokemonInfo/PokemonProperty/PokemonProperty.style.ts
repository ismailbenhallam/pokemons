import styled from "@emotion/styled";
import {Flex, Text} from "@chakra-ui/react";

export const StyledContainer = styled(Flex)`
  flex-direction: column;
  gap: 3px;
  flex: 1 0 45%;
  margin-bottom: 5px;
  margin-left: 25px
`

export const StyledPropertyName = styled(Text)`
  color: white;
  font-size: 16px;
`

export const StyledPropertyValue = styled(Text)`
  font-size: 20px;
`

export const StyledProperties = styled(Flex)`
  flex-direction: column;
  gap: 2px;
`