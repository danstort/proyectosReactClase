import React from "react";
import TemaContext from "../contexts/TemaContext";
import temas from "../mocks/mocks-temas";



const Color = () => {

    const tema = React.useContext(TemaContext);

    if(tema === temas.light){
        return (
            <button style={{background: tema.background,
                color: tema.foreground,
            }}>Claro</button>
        )

    } else if(tema === temas.dark){

        return (
            <button style={{background: tema.background,
                color: tema.foreground,
            }}>Oscuro</button>
        )

    }
    
}

export default Color;