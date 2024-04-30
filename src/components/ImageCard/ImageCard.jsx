import ReactModal from 'react-modal';
import Modal from 'react-modal';
import { useState } from 'react';


export default function ImageCard(image) {
    const { raw, full, regular, small, thumb } = image.image.urls;
    const { id } = image.image.id;
    Modal.setAppElement(id)

    const [isOpen , setIsOpen] = useState(false)

    return <div onClick={() => {setIsOpen(true)}}>
        <ReactModal isOpen={isOpen} appElement={id}/>

        <img src={small} alt="" width={50} height={50}/>
    </div>
}