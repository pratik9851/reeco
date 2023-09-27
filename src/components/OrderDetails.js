import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OrderCard from './OrderCard';
import styled from 'styled-components';
import MissingItemModal from './MissingModal';
import { toggleApproval } from '../features/reecoCartSlice';

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 55%; /* Adjust card width as needed */
  margin-left: 22%;
  margin-top: 50px;

`;
const AdditionalCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-height: 75px;
  margin-top: 60px;
  margin-bottom:60px;
  display: flex;
  justify-content: space-between;

`;

const TableContainer = styled.div`
  text-align: center;
`;

const SearchInput = styled.input`
  margin-right: 10px;
  padding: 8px 12px; /* Add padding for better appearance */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px; /* Adjust font size as needed */
  outline: none; /* Remove the default outline */
  
  &:hover,
  &:focus {
    border-color: #1E633f; /* Change border color on hover and focus */
  }
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-radius: 30px;
`;

const StyledTh = styled.th`
  border-top: 1px solid #ccc;
  padding: 8px;
  text-align: left;
`;

const StyledTd = styled.td`
  text-align: left;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 8px;
  &:last-child {
    background-color: #f5f5f5;
  }
`;

const AddItemButton = styled.button`
  border-radius: 20px;
  color: #1E633f;
  background-color: transparent;
  border: 1px solid #1E633f;
  padding: 5px 10px;
`;

const StatusBadge = styled.span`
  min-width: 110px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  margin-right: 10px;
  border-radius: 25px;
  font-size: 12px;
  padding: 7px;
`;

const StatusIcon = styled.i`
  color: ${(props) => props.color};
  margin-right: 10px;
`;

const EditSpan = styled.span`
  font-size: 12px;
`;
const BackButton = styled.button`
  cursor: pointer;
  margin-right:10px;
  border-radius: 15px;
  color: #1E633f;
  background-color: transparent;
  border: 1px solid #1E633f;
  padding: 0px 10px;

`;

const ApproveOrderButton = styled.button`
  background-color: #1E633f;
  border: none;
  padding: 2px 10px;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  margin-right:10px;
`;

function OrderDetails({ orderId }) {
  const [modalItemId, setModalItemId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [filteredItems, setFilteredItems] = useState([]);
  const dispatch = useDispatch();

  const order = useSelector((state) =>
    state.orders.find((order) => order.orderId === orderId)
  );

  const openModal = (itemId) => {
    setIsModalOpen(true);
    setModalItemId(itemId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMissingItem = (isMissing) => {
    // Handle missing item logic here
    closeModal();
  };
  useEffect(() => {
    const updatedFilteredItems = order.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(updatedFilteredItems);
  }, [searchQuery, order.items]);

  return (
    <div>
       <AdditionalCard>
        <div style={{marginTop:'30px',marginRight:'70px'}}>
          <h2>Order {orderId}</h2>
        </div>
        <div style={{ width:'170px',display:'flex', justifyContent:'space-between',marginTop:'55px',marginRight:'70px'}}>
          <BackButton>Back</BackButton>
          <ApproveOrderButton>Approve Order</ApproveOrderButton>
        </div>
      </AdditionalCard>
      <OrderCard orderId={orderId} />
      <CardContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
          <SearchInput
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
            />
          </div>
          <div>
            <AddItemButton>Add Item</AddItemButton>
            <span>&nbsp;&nbsp;</span>
            <i style={{ color: '1E633f' }} className="fa fa-print fa-lg"></i>
          </div>
        </div>
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <StyledTh style={{ minWidth: '110px', borderLeft: '1px solid #ccc' }}>Product Name</StyledTh>
                <StyledTh>Brand</StyledTh>
                <StyledTh>Price</StyledTh>
                <StyledTh>Quantity</StyledTh>
                <StyledTh>Total</StyledTh>
                <StyledTh style={{ borderRight: '1px solid #ccc' }}>Status</StyledTh>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  <StyledTd style={{ minWidth: '110px', borderLeft: '1px solid #ccc' }}>{item.name}</StyledTd>
                  <StyledTd>{item.id}</StyledTd>
                  <StyledTd>${item.price.toFixed(2)}</StyledTd>
                  <StyledTd>{item.quantity}</StyledTd>
                  <StyledTd>${(item.quantity * item.price).toFixed(2)}</StyledTd>
                  <StyledTd style={{ borderRight: '1px solid #ccc' }}>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                      <div>
                        {item.approved ? (
                          <StatusBadge backgroundColor="green">Approved</StatusBadge>
                        ) : item.missing ? (
                          <StatusBadge backgroundColor="orange">Missing</StatusBadge>
                        ) : item.urgentMissing ? (
                          <StatusBadge backgroundColor="red">Urgent Missing</StatusBadge>
                        ) : (
                          <div style={{ minWidth: '110px', marginRight: '10px' }}></div>
                        )}
                      </div>
                      <div>
                        {item.approved ? (
                          <StatusIcon className="fa fa-check " color="green" onClick={() => dispatch(toggleApproval({ orderId, itemId: item.id }))}></StatusIcon>
                        ) : (
                          <StatusIcon className="fa fa-check " color="grey" onClick={() => dispatch(toggleApproval({ orderId, itemId: item.id }))}></StatusIcon>
                        )}
                        {(item.missing || item.urgentMissing) ? (
                          <StatusIcon className="fa fa-times " color="red" onClick={() => openModal(item.id)}></StatusIcon>
                        ) : (
                          <StatusIcon className="fa fa-times " color="grey" onClick={() => openModal(item.id)}></StatusIcon>
                        )}
                        <EditSpan>Edit</EditSpan>
                      </div>
                    </div>
                  </StyledTd>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>
      </CardContainer>

      <MissingItemModal isOpen={isModalOpen} onRequestClose={closeModal} onConfirm={handleMissingItem} orderId={orderId} itemId={modalItemId} />
    </div>
  );
}

export default OrderDetails;





