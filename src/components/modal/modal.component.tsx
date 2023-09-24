import React from 'react';
import './modal.component.style';
interface ModalProps {
  modalData: any;
  modalOpen: boolean;
}

export const Modal: React.FC<ModalProps> = ({ modalData, modalOpen }) => {
  console.log(modalData.name, 'DATA__DATA');
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{modalData.name}</h2>
      </div>
    </div>
  );
};
