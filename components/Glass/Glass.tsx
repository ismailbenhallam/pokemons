import styled from "@emotion/styled";
import React from "react";
import {Box} from "@chakra-ui/react";


const StyledGlass = styled(Box)`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.7px);
  -webkit-backdrop-filter: blur(2.7px);
  width: 80%;
  padding: 40px 80px;
`

const Glass = (props: any) => {
    return (
        <StyledGlass {...props}>
            {props.children}
        </StyledGlass>
    );
}

export default Glass