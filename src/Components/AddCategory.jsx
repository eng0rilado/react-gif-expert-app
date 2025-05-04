import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <=1)
            return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        // Con Form se lanza el evento submit cuando se hace click y se refresca el component
        <form onSubmit = {(event) => onSubmit(event)} >
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
