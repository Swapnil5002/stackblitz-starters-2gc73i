import React from 'react';
import './modal.component.style';
interface ModalProps {
  modalData: any;
  modalOpen: boolean;
}

export const Modal: React.FC<ModalProps> = ({ modalData, modalOpen }) => {
  console.log(modalData, 'DATA__DATA');

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="image-container">
          <img
            src={modalData.image_url}
            alt={modalData.title}
            className="image"
          />
        </div>
        <div className="content-container">
          <h2 className="modal-title">{modalData.name}</h2>
          <p className="tagline">{modalData.tagline}</p>
        </div>
      </div>
    </div>
  );
};
