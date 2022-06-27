import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: 0,
    background: "rgba(121, 122, 121, 0)",
  },
  overlay: {
    backgroundColor: "rgba(3, 3, 3, 0.8)",
  },
};

interface ImCoProps {
  img: string;
}

Modal.setAppElement("body");

function ImageComponent({ img }: ImCoProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <img
        className="thumbImage"
        src={img}
        alt="aperçu du spectacle"
        onClick={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img src={img} alt="" onClick={closeModal} />
      </Modal>
    </div>
  );
}

export default ImageComponent;
