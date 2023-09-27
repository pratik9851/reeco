import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [
    {
      orderId: '12345',
      orderDate: 'September 20, 2023',
      customerName: 'John Doe',
      shippingAddress: '123 Main St, City, Country',
      supplier:'East coast Fruits',
      category:'Fruits',
      items: [
        {
          id: '1',
          name: 'Product 1',
          quantity: 2,
          price: 25.99,
          approved: false,
          missing:false,
          urgentMissing: false,
        },
        {
          id: '2',
          name: 'Product 2',
          quantity: 1,
          price: 15.49,
          approved: false,
          missing:false,
          urgentMissing: false,
        },
        {
          id: '3',
          name: 'Product 3',
          quantity: 2,
          price: 20.99,
          approved: false,
          missing:false,
          urgentMissing: false,
        },
        {
          id: '4',
          name: 'Product 4',
          quantity: 1,
          price: 45.49,
          approved: false,
          missing:false,
          urgentMissing: false,
        },
        {
          id: '5',
          name: 'Product 5',
          quantity: 2,
          price: 65.99,
          approved: false,
          missing:false,
          urgentMissing: false,
        },
        {
          id: '6',
          name: 'Product 6',
          quantity: 1,
          price: 15.49,
          approved: false,
          missing:false,
          urgentMissing: false,
        },
        {
          id: '7',
          name: 'Product 7',
          quantity: 2,
          price: 45.99,
          approved: false,
          missing:false,
          urgentMissing: false,
        },
        
      ],
    },
  ],
};

export const reecoCartSlice = createSlice({
  name: 'reecoCart',
  initialState,
  reducers: {
    toggleApproval: (state, action) => {
      const { orderId, itemId } = action.payload;
      const order = state.orders.find((order) => order.orderId === orderId);
      if (order) {
        const item = order.items.find((item) => item.id === itemId);
        if (item) {
          item.approved = !item.approved;
          item.urgentMissing = false;
            item.missing = false;
        }
      }
    },
    toggleStatus: (state, action) => {
      const { orderId, itemId, status } = action.payload;
      const order = state.orders.find((order) => order.orderId === orderId);
      if (order) {
        const item = order.items.find((item) => item.id === itemId);
        if (item) {
          if (status) {
            item.urgentMissing = true;
            item.missing = false;
            item.approved = false;
          } else {
            item.urgentMissing = false;
            item.missing = true;
            item.approved = false;
          }
        }
      }
    },
  },
});

export const { toggleApproval,toggleStatus } = reecoCartSlice.actions;

export default reecoCartSlice.reducer;
