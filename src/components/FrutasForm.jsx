import { useForm } from 'react-hook-form';

const FrutasForm = (props) => {

  const FRUTAS_ID = {

    // Identificadores de los campos del formulario, se los asignaremos al atributo id
    AÑADIR: "añadir",
    ELIMINAR: "eliminar",
    

  }


  const { register,
    handleSubmit,
    reset,
    formState: { errors },
    watch } = useForm({ defaultValues: ""});


  const manejarFormulario = handleSubmit((nuevaNota) => {
    console.log("Datos del formulario:", nuevaNota);
    // Aquí puedes agregar la lógica para manejar los datos del formulario, por ejemplo, enviarlos a un servidor
    // Después de manejar los datos, puedes resetear el formulario si es necesario
    props.manejarAccion(nuevaNota);
    reset();
  })


  return (
    <form id="formulario" onSubmit={manejarFormulario}>
      
      <label htmlFor={FRUTAS_ID.AÑADIR}>Escribe la fruta que quieres añadir</label>
      <input id={FRUTAS_ID.AÑADIR} type="text"
        {...register(FRUTAS_ID.AÑADIR,
          {
            required: {
              value: true,
              message: "El contenido es obligatorio"
            }
          })
        }
      /><br></br>

      <button>Añadir Nota</button>
      <br></br>{JSON.stringify(watch())}
    </form>
  )
}

export default FrutasForm;