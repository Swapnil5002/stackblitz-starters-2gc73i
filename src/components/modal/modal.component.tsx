import React from 'react';
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
      <span>{contentHeading}</span>
      <span>{contentValue}</span>
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

  return (
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
          {beerContentDetails.map((val, index) => (
            <BeerContentDetails
              key={index}
              contentHeading={val.contentHeading}
              contentValue={val.contentValue}
            />
          ))}
          <p>{modalData.description}</p>
          <p>Best Served with:</p>
        </div>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};
