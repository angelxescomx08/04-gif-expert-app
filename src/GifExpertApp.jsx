import { useState } from "react"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Code geass']);
    return (
        <>
            <h1>GifExpertApp</h1>
            <ol>
                {categories.map((category, i) => <li key={i}>{category}</li>)}
            </ol>
        </>
    )
}
