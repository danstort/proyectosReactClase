import { useForm } from 'react-hook-form';

const FrutasForm = (props) => {

  const FRUTAS_ID = {

    // Identificadores de los campos del formulario, se los asignaremos al atributo id
    AÑADIR: "añadir",
    ELIMINAR: "eliminar",


  }

  //Inicializo 2 hooks de react-hook-form, uno para cada formulario
  //Cada hook tiene su propio register, handleSubmit, reset y formState
  //Faltaría añadirle el watch para comprobar los datos del formulario(Opcional)
  const { register: register1,
    handleSubmit: handleSubmit1,
    reset: reset1,
    formState: { errors: errors1 } } = useForm({ defaultValues: "" })

  const { register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
    formState: { errors: errors2 } } = useForm({ defaultValues: "" })

  console.log(errors1);
  console.log(errors2);


  const manejarFormularioAñadir = handleSubmit1((nuevaFruta) => {
    console.log("Nombre de la fruta:", nuevaFruta);
    // Después de manejar los datos, puedes resetear el formulario si es necesario
    props.manejarInserccion(nuevaFruta); //nuevaFruta es un objeto con esta forma {añadir: "nombre de la fruta"}. Para acceder al nombre de la fruta, tengo que meter por props {añadir} en la función manejarInserccion
    reset1({ añadir: "" });
  })

  const manejarFormularioEliminar = handleSubmit2((nuevaFruta) => {
    props.manejarEliminacion(nuevaFruta); //nuevaFruta es un objeto con esta forma {eliminar: "número de la fruta"}. Para acceder al número de la fruta, tengo que meter por props {eliminar} en la función manejarEliminacion
    reset2({ eliminar: "" });

  })


  return (

    <div>
      <form id="formulario" onSubmit={manejarFormularioAñadir}>

        <label htmlFor={FRUTAS_ID.AÑADIR}>Escribe la fruta que quieres añadir</label>
        <input id={FRUTAS_ID.AÑADIR} type="text"
          {...register1(FRUTAS_ID.AÑADIR,
            {
              required: {
                value: true,
                message: "El contenido es obligatorio"
              }
            })
          }
        /><br></br>

        <button>Añadir Fruta</button>

      </form>

      <form id="formulario" onSubmit={manejarFormularioEliminar}>

        <label htmlFor={FRUTAS_ID.ELIMINAR}>Escribe el número de fruta a eliminar</label>
        <input id={FRUTAS_ID.ELIMINAR} type="text"
          {...register2(FRUTAS_ID.ELIMINAR,
            {
              required: {
                value: true,
                message: "El contenido es obligatorio"
              }
            })
          }
        /><br></br>

        <button>Eliminar Fruta</button>

      </form>

    </div>



  )
}

export default FrutasForm;