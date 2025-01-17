import { useForm } from 'react-hook-form';

const CocheForm = (props) => {

    const COCHE = {

        MODELO: 'modelo',
        MATRICULA: 'matricula',
        COLOR: 'color',
        PUERTAS: 'npuertas'
    };

    const COCHEINICIAL = {

        MODELO: "",
        MATRICULA: "",
        COLOR: "",
        npuertas: 2
    };

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm({ defaultValues: COCHEINICIAL })

    console.log(errors);

    const manejarFormulario = handleSubmit((nuevoCoche) => {

        console.log(nuevoCoche);

        reset(COCHEINICIAL);

    })


    return (
        <form id="formulario" onSubmit={manejarFormulario}>
            <p><strong>Nuevo vehículo</strong></p>

            <label htmlFor={COCHE.MODELO}>Modelo</label>
            <input id={COCHE.MODELO} type="text"
                {
                ...register(COCHE.MODELO,
                    {
                        required: { value: true, message: 'El modelo es obligatorio' },
                    }
                )


                }
            /><br /><br /><span>{errors.modelo?.message}<br></br></span>

            <label htmlFor={COCHE.MATRICULA}>Matrícula</label>
            <input id={COCHE.MATRICULA} type="text"

                {...register(COCHE.MATRICULA, {
                    required: {
                        value: true,
                        message: "La matrícula es obligatoria"
                    },
                    pattern: {
                        value: /^\\d\\d\\d\\d[BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ]$/,
                        message: "El formato de la matrícula no es correcto 0000-AAA"
                    }
                })
                }

            /><br /><br /><span>{errors.matricula?.message}<br></br></span>

            <label htmlFor={COCHE.COLOR}>Color</label>
            <input id={COCHE.COLOR} type="text"
                {...register(COCHE.COLOR,
                    { required: { value: true, message: 'El color es obligatorio' } }
                )}
            /><br /><br /><span>{errors.color?.message}<br></br></span>

            <label htmlFor={COCHE.PUERTAS}>Nº Puertas</label>
            <input id={COCHE.PUERTAS} type="number"
                {...register(COCHE.PUERTAS,
                    {
                        required: { value: true, message: 'El número de puertas es obligatorio' },
                        min: { value: 2, message: 'El número mínimo de puertas es 2' },
                        max: { value: 5, message: 'El número máximo de puertas es 5' }
                    }
                )}
            /><br /><br /><span>{errors.npuertas?.message}<br></br></span>


            <button>Añadir Coche</button>
        </form>
    );
}

export default CocheForm;