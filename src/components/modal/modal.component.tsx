import React, { useEffect } from 'react';
import './modal.component.style';
interface ModalProps {
  modalData: any;
  modalOpen: boolean;
  handleClose: (...args) => void;
}
interface BeerContent {
  contentHeading: string;
  contentValue: string;
}
interface BeerContentDetailsProps {
  contentHeading: string;
  contentValue: string;
}
const BeerContentDetails: React.FC<BeerContentDetailsProps> = ({
  contentHeading,
  contentValue,
}) => {
  return (
    <div className="content-heading">
      <span className="content-header">{contentHeading}:</span>
      <span className="content-value">{contentValue}</span>
    </div>
  );
};

export const Modal: React.FC<ModalProps> = ({
  modalData,
  modalOpen,
  handleClose,
}) => {
  const beerContentDetails: BeerContent[] = [
    { contentHeading: 'IBU', contentValue: modalData.ibu },
    { contentHeading: 'ABV', contentValue: modalData.abv },
    { contentHeading: 'EVC', contentValue: modalData.ebc },
  ];

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleEscKey);
    } else {
      window.removeEventListener('keydown', handleEscKey);
    }
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [modalOpen, handleClose]);

  return (
    <div className="main">
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="image-container">
            <img
              src={modalData.image_url}
              alt={modalData.title}
              className="image"
              loading="lazy"
            />
          </div>
          <div className="content-container">
            <h2 className="modal-title">{modalData.name}</h2>
            <p className="tagline">{modalData.tagline}</p>
            <div className="underline" />
            <div className="beer-container-details">
              {beerContentDetails.map((val, index) => (
                <BeerContentDetails
                  key={index}
                  contentHeading={val.contentHeading}
                  contentValue={val.contentValue}
                />
              ))}
            </div>
            <p>{modalData.description}</p>
            <p>Best Served with:</p>
            <ol>
              {modalData.food_pairing.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
        <button onClick={handleClose} className="close">
          Close
        </button>
      </div>
      <button onClick={handleClose} className="close">
        Close
      </button>
    </div>
  );
};
