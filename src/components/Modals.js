import React from "react";
import { useModal } from "../hooks/useModal";
import { ContactForm } from "./ContactForm";
import Modal from "./Modal";

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openContact, closeContact] = useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi Modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>

      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          pariatur odio corporis saepe, adipisci quis reprehenderit, aliquam ex,
          optio tempora obcaecati distinctio libero voluptate nesciunt vero sint
          a ducimus quaerat?
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>

      <button onClick={openContact}>Modal Contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeContact}>
        <ContactForm />
      </Modal>
    </div>
  );
};
