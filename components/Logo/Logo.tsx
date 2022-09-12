import React from "react";
import {LOGO_SRC} from "../../constants";

export default (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
    return (
        <img src={LOGO_SRC}
             alt="PokeApi logo" {...props}/>
    );
}