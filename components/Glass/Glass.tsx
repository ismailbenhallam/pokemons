import React from "react";
import {StyledGlass} from "./Glass.style";

const Glass = (props: any) => {
    return (
        <StyledGlass {...props}>
            {props.children}
        </StyledGlass>
    );
}

export default Glass