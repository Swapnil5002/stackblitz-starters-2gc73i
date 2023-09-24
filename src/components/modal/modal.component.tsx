import React from 'react';

interface ModalProps {
  modalData: any;
  modalOpen: boolean;
}

export const Modal: React.FC<ModalProps> = ({ modalData, modalOpen }) => {
  console.log(modalData.name, 'DATA__DATA');
  return (
    <>
      <div>This is Modal {modalData.name}</div>
    </>
  );
};
