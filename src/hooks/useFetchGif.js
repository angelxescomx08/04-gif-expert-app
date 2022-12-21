import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGif = (category) => {
    const [images, setImages] = useState([]);
    const [cargando, setCargando] = useState(true);

    const getImages = async () => {
        const newImages = await getGif(category);
        setImages(newImages);
        setCargando(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return{
        images,
        cargando
    }

}
