import { useForm } from 'react-hook-form';

const NotaForm = (props) => {

  const NOTA = {

    // Identificadores de los campos del formulario, se los asignaremos al atributo id
    CONTENIDO: "contenido",

  }

  // Objeto coche en su estado inicial
  const NOTAINICIAL = {
    contenido: ""
  }

  const { register,
    handleSubmit,
    reset,
    formState: { errors },
    watch } = useForm({ defaultValues: NOTAINICIAL });

  const manejarFormulario = handleSubmit ((nuevaNota) => {
    console.log("Datos del formulario:", data);
    // Aquí puedes agregar la lógica para manejar los datos del formulario, por ejemplo, enviarlos a un servidor
    // Después de manejar los datos, puedes resetear el formulario si es necesario
    reset();
  })


  return (
    <form id="formulario" onSubmit={manejarFormulario}>
      <p><strong>Nuevo vehículo</strong></p>
      <label htmlFor={NOTA.CONTENIDO}>Modelo</label>
      <input id={NOTA.CONTENIDO} type="text"
        {...register(NOTA.CONTENIDO,
          {
            required: {
              value: true,
              message: "El modelo es obligatorio"
            }
          })
        }
      /><br></br><span>{errors.modelo?.message}</span><br></br>



      <button>Añadir Coche</button>
      <br></br>{JSON.stringify(watch())}
    </form>
  )
}

export default NotaForm;