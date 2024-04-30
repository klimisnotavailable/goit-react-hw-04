import { nanoid } from 'nanoid';
import ImageCard from '../ImageCard/ImageCard';
import css from "../imageGallery/ImageGallery.module.css";

export default function ImageGallery(data) {
    const gallery = data.data.map(image => {
        return <li key={nanoid()}> <ImageCard image={image} /></li>
    });
    return <ul className={css.imageGallery}>{gallery }</ul>
}

