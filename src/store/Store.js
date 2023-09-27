import {configureStore} from '@reduxjs/toolkit';
import reecoCartReducer from '../features/reecoCartSlice';


export const Store= configureStore({
    reducer:reecoCartReducer,
})