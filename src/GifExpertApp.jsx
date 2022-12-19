import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Code geass']);

    const onAddCategory = (valor) =>{
        setCategories(categories=>[...categories,valor])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory} />
            <ol>
                {categories.map((category, i) => <li key={i}>{category}</li>)}
            </ol>
        </>
    )
}
