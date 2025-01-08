import React from "react";
import TemaContext from "../contexts/TemaContext";

const BotonTema = () => {

    const tema = React.useContext(TemaContext);
    return (

        <button style={{background: tema.background,
                        color: tema.foreground,
        }}>aaaa</button>
    )
}

export default BotonTema;