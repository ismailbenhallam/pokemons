import React from "react";
import {LOGO_SRC} from "../../constants";
import {ImageProps} from "next/dist/client/image";
import {Image} from "@chakra-ui/react";

const Logo = (props: Omit<ImageProps, "src">) => {
    return (
        <Image width={"70vw"} maxWidth="650px" objectFit="contain"  alt="PokeApi logo" {...props} src={LOGO_SRC} style={{
            maxWidth: "650px"
        }}/>
    )
}


export default Logo