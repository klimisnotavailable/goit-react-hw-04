import ImageCard from '../ImageCard/ImageCard';
import css from "../imageGallery/ImageGallery.module.css";

export default function ImageGallery({ data, setIsOpen, setImage }) {
    const gallery = data.map(image => {
        return <li key={image.id}> <ImageCard image={image} setIsOpen={setIsOpen} 
        setImage={setImage} /></li>
    });
    return <ul className={css.imageGallery}>{gallery }</ul>
}

