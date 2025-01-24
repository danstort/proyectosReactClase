import {useForm} from 'react-hook-form';

const CocheForm = (props) => {

    const COCHE = {
        
        // Identificadores de los campos del formulario, se los asignaremos al atributo id
        MODELO    : "modelo",
        MATRICULA : "matricula",
        COLOR     : "color",
        PUERTAS   : "npuertas",
    }

    // Objeto coche en su estado inicial
    const COCHEINICIAL={modelo    : "",
                        matricula : "",
                        color     : "",
                        npuertas  : 2}

    const {register, 
           handleSubmit, 
           reset, 
           formState: {errors},
           watch} = useForm({defaultValues: COCHEINICIAL});

    console.log(errors);

    // Función encargada de actualiar el hook de estado del componente y
    // devolver el coche creado al objeto padre
    const manejarFormulario = handleSubmit((nuevoCoche) => {

        console.log(nuevoCoche);

        // A través de la función que recibe el componente como props, devolvemos el nuevo coche
        // al componente padre para que lo añada a la lista de coches
        props.manejarAccion(nuevoCoche);           

        reset(COCHEINICIAL);
    })

    return (
        <form id="formulario" onSubmit={manejarFormulario}>
            <p><strong>Nuevo vehículo</strong></p>
            <label htmlFor={COCHE.MODELO}>Modelo</label> 
            <input id={COCHE.MODELO} type="text" 
                   {...register(COCHE.MODELO,
                                {
                                  required: { value   : true,
                                             message : "El modelo es obligatorio"
                                            }
                                })
                   }
                   /><br></br><span>{errors.modelo?.message}</span><br></br>

            <label htmlFor={COCHE.MATRICULA}>Matrícula</label>
            <input id={COCHE.MATRICULA} type="text"
                   {...register(COCHE.MATRICULA,
                                {
                                  required: { value   : true,
                                             message : "La matrícula es obligatoria"
                                            }
                                ,
                                pattern:  { value   : /^\d\d\d\d[BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ]$/,
                                             message : "El formato de la matrícula no es correcto 0000AAA"
                                           }
                                })
                   }
                   /><br></br><span>{errors.matricula?.message}</span><br></br>

            <label htmlFor={COCHE.COLOR}>Color</label>
            <input id={COCHE.COLOR} type="text"
                    {...register(COCHE.COLOR,
                                 {
                                  required: { value   : true,
                                              message : "El color es obligatorio"
                                            }
                                 })
                    }
                    /><br></br><span>{errors.color?.message}</span><br></br>

            <label htmlFor={COCHE.PUERTAS}>Nº Puertas</label>
            <input id={COCHE.PUERTAS} type="number"
                   {...register(COCHE.PUERTAS,
                                {
                                 required: { value   : true, 
                                             message : "El número de puertas es obligatorio"
                                           },
                                 min: { value : 2, 
                                        message: "Valor mínimo para este campo es 2"
                                      },
                                 max: { value : 5,
                                        message: "Valor máximo para este campo es 5"
                                      }
                                })
                   }/><br></br><span>{errors.npuertas?.message}</span><br></br>               

            <button>Añadir Coche</button>
            <br></br>{JSON.stringify(watch())}
        </form>
    )
}

export default CocheForm;