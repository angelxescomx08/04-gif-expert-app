
import { useFetchGif } from "../hooks/useFetchGif";
import { GridItem } from "./GridItem";

export const GifGrid = ({ category }) => {

    const { images, cargando } = useFetchGif(category);

    return (
        <>
            <h3>{category}</h3>
            {cargando && <h2>Cargando...</h2>}
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
