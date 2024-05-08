
export default function ImageCard({ image, setIsOpen, setImage }) {
    const { raw, full, regular, small, thumb } = image.urls;
    const { id } = image.id;

    return <div id={id} onClick={() => { setIsOpen(true); setImage(regular)}}>
        <img src={small} alt="" width={50} height={50}/>
    </div>
}