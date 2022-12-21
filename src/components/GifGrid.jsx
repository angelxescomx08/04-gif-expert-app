import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGifs"
import { GridItem } from "./GridItem";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGif(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GridItem 
                            key={image.id} 
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
