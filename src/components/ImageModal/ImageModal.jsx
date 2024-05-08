import Modal from 'react-modal';
Modal.setAppElement("#root")

export default function ImageModal({ isOpen, img, onCloseModal }) {
    console.log(img)
    return <Modal isOpen={isOpen}><button onClick={() => onCloseModal() }>close</button> <img src={img } alt="" width={600} height={600} /></Modal>
}