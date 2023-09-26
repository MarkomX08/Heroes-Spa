import { useState } from 'react';

export const useForm = (initialForm ={} ) => {

    //creacion del State
    const [FormState, setFormState] = useState(initialForm);

    //funcion para el cambio de los valores del arreglo del UseState
    const onInputChange = ({target})=> {
        //destructuracion de los elementos del target
        const { name , value } = target;
        //actualizacion del UseState
        setFormState({
            ...FormState,
            [name] : value
        });    
    };

    // funcion para el reseteo del input
    const onResetForm = () =>{
        setFormState(initialForm);
    }

  return {
    ...FormState,
    FormState,
    onInputChange,
    onResetForm
  }
}