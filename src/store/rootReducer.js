import { combineReducers } from '@reduxjs/toolkit';
import { CGVBookingReducer } from './CGVBookingRedux/slice'

export const rootReducer = combineReducers({
    CGVBookingReducer
});
