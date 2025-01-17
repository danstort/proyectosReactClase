const Coche = (props) => {

    return (
        <tr>
            <td>{props.coche.modelo}</td>
            <td>{props.coche.matricula}</td>
            <td>{props.coche.color}</td>
            <td>{props.coche.npuertas}</td>
        </tr>
    )
}

export default Coche;