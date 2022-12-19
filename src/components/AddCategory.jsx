import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {
    const [valueInput, setValueInput] = useState('');

    const onChangeInput = ({ target }) => {
        setValueInput(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(valueInput.trim().length <= 1)return;
        onAddCategory(valueInput);
        setValueInput('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                value={valueInput}
                onChange={onChangeInput} />
        </form>
    )
}
