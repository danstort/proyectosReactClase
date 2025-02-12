import { useForm } from 'react-hook-form';

const NotaForm = (props) => {

  const NOTA = {

    // Identificadores de los campos del formulario, se los asignaremos al atributo id
    CONTENIDO: "contenido",
    FECHA: "fecha",
    IMPORTANTE: "importante",

  }

  // Objeto coche en su estado inicial
  const NOTAINICIAL = {
    contenido: "",
    fecha: "",
    importante: false
  }

  const { register,
    handleSubmit,
    reset,
    formState: { errors },
    watch } = useForm({ defaultValues: NOTAINICIAL });

  const manejarFormulario = handleSubmit((nuevaNota) => {
    console.log("Datos del formulario:", nuevaNota);
    // Aquí puedes agregar la lógica para manejar los datos del formulario, por ejemplo, enviarlos a un servidor
    // Después de manejar los datos, puedes resetear el formulario si es necesario
    props.manejarAccion(nuevaNota);
    reset();
  })


  return (
    <form id="formulario" onSubmit={manejarFormulario}>
      <p><strong>Nuevo Nota</strong></p>
      <label htmlFor={NOTA.CONTENIDO}>Modelo</label>
      <input id={NOTA.CONTENIDO} type="text"
        {...register(NOTA.CONTENIDO,
          {
            required: {
              value: true,
              message: "El contenido es obligatorio"
            }
          })
        }
      /><br></br><span>{errors.modelo?.message}</span><br></br>

      <p>Fecha</p>
      <input id={NOTA.FECHA} type="date"
        {...register(NOTA.FECHA,
          {
            required: {
              value: true,
              message: "La fecha es obligatoria"
            }
          })
        }
      /><br></br><span>{errors.fecha?.message}</span><br></br>

      <p>Importante</p>
      <div>

       <input id={NOTA.IMPORTANTE} type="radio" value={true}
        {...register(NOTA.IMPORTANTE)
        }
      />Sí <br></br>

      <input id={NOTA.IMPORTANTE} type="radio" value={false}
        {...register(NOTA.IMPORTANTE)
        }
      />No <br></br> 

      </div>
      




      <button>Añadir Nota</button>
      <br></br>{JSON.stringify(watch())}
    </form>
  )
}

export default NotaForm;