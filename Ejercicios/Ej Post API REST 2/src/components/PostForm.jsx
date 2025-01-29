import React from 'react'
import { useForm } from 'react-hook-form'


const PostForm = (props) => {

    
    const POST_ID = {

    // Identificadores de los campos del formulario, se los asignaremos al atributo id de cada campo
    TITULO  : "title",
    CUERPO  : "body"

    }
    
    // Objeto post en su estado inicial
    const POSTINICIAL={userid    : 1,   // Por defecto le asignaremos el POST al usuario con id=1
                       id        : 0,   // ID que luego se sustituirá 
                       title     : "",
                       body      : ""}
    
    const {register,
           handleSubmit,
           reset,
           formState : {errors}} = useForm({defaultValues: POSTINICIAL});
             
    console.log(errors);

    const manejarFormulario = handleSubmit ((nuevoPost) => {

        // A través de la función que recibe el componente como props, devolvemos el nuevo Post
        // al componente padre para que lo añada a la lista de post
        props.manejarAccion(nuevoPost);

        // Reseteamos los campos del formulario al estado inicial
        reset(POSTINICIAL);
    
    })

    return (
        <form id="formulario" onSubmit={manejarFormulario}>
                <p><strong>Nueva nota</strong></p>
                <label htmlFor={POST_ID.TITULO}>Contenido</label> 
                <input id={POST_ID.TITULO} type="text" 
                    {...register(POST_ID.TITULO,
                                {required : { value : true,
                                              message: "El título del post es obligatorio"
                                }
                                })
                     }
                ></input><br></br><span className='errors'>{errors.title?.message}</span><br></br>
                
                <label htmlFor={POST_ID.CUERPO}>Cuerpo</label> 
                <textarea id={POST_ID.CUERPO} rows="10" cols="50"
                    {...register(POST_ID.CUERPO,
                        {required : { value : true,
                                      message: "El cuerpo del post es obligatorio"
                                    },
                        maxLength: {
                            value: 500,
                            message: "El comentario no puede exceder los 500 caracteres"
                          }
                        })
                    }
                ></textarea><br></br><span className='errors'>{errors.body?.message}</span><br></br>
                
                <button>Añadir Post</button>

        </form>

    )
}

export default PostForm;