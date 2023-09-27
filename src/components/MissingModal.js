import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleStatus } from '../features/reecoCartSlice';

// Define a custom style for the modal content
const CustomModalContent = styled.div`
  padding: 10px;
  position:relative;
`;

const CloseButton = styled.button`
  position: absolute;
  font-size:25px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ProductName = styled.span`
  font-weight: normal; /* Remove bold style */
  margin-top:0px;
`;

const ActionText = styled.span`
  cursor: pointer;
  margin: 0 10px;
`;

const MissingItemModal = ({ isOpen, onRequestClose, onConfirm, orderId, itemId }) => {
  const dispatch = useDispatch();

  const handleConfirm = (status) => {
    // Dispatch the toggleStatus action with the appropriate payload
    dispatch(toggleStatus({ orderId, itemId, status }));

    // Close the modal
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          width: '250px', // Adjust the width as needed
          height: '150px',
          margin: 'auto', // Center the modal horizontally
        },
      }}
    >
      <CustomModalContent>
        <CloseButton onClick={onRequestClose}>&times;</CloseButton>
        <h3>Missing product</h3>
        <p>
          <ProductName>Is Product name Urgent?</ProductName>
        </p>
      </CustomModalContent>
      <div style={{textAlign:'end'}}>
        <ActionText onClick={() => handleConfirm(true)}>Yes</ActionText>
        <ActionText onClick={() => handleConfirm(false)}>No</ActionText>
      </div>
    </Modal>
  );
};

export default MissingItemModal;


