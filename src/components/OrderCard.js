import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// Define styled components for the card container, header, labels, and values
const Card = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-left:22%;
  height:50px; /* Adjust as needed */
  width:55%;
`;

const CardSection = styled.div`
  display: flex;
  flex-direction:column;
  margin-bottom: 10px;
  padding-right:25px;
  padding-left:25px;
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
`;

const CardLabel = styled.div`
  font-weight: bold;
`;

const CardValue = styled.div``;

function OrderCard({orderId}) {
    const order = useSelector((state) =>
    state.orders.find((order) => order.orderId === orderId)
  );

  let total=order.items.reduce((total,item)=>
    total+(Number(item.price)*Number(item.quantity))

  ,0)
  return (
    <Card>
      <CardSection>
        <CardLabel>Supplier</CardLabel>
        <CardValue>{order.supplier}</CardValue>
      </CardSection>
      <CardSection>
        <CardLabel>Shipping Date</CardLabel>
        <CardValue>{order.orderDate}</CardValue>
      </CardSection>
      <CardSection>
        <CardLabel>Total</CardLabel>
        <CardValue>{'$'+total}</CardValue>
      </CardSection>
      <CardSection>
        <CardLabel>Category</CardLabel>
        <CardValue>{order.category}</CardValue>
      </CardSection>
      <CardSection>
        <CardLabel>Department</CardLabel>
        <CardValue>Sales</CardValue>
      </CardSection>
      <CardSection>
        <CardLabel>Status</CardLabel>
        <CardValue>Shipped</CardValue>
      </CardSection>
    </Card>
  );
}

export default OrderCard;

