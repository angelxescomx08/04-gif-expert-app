import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Code geass']);

    const onAddCategory = (valor) => {
        if (categories.includes(valor)) return;
        setCategories(categories => [valor, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory} />
    
            {categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))}
        </>
    )
}
