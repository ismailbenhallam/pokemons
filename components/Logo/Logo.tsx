import React from "react";
import {LOGO_SRC} from "../../constants";
import Image from "next/image";
import {ImageProps} from "next/dist/client/image";

const Logo = (props: Omit<ImageProps, "src">) => {
    return (
        <Image width="650px" height="200px"  alt="PokeApi logo" {...props} src={LOGO_SRC} style={{
            maxWidth: "650px"
        }}/>
    )
}


export default Logo