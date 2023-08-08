import { createSlice } from '@reduxjs/toolkit';
import chairListData from '../../CGVBookingDemo/data.json';

const initialState = {
    confirmModal: false,
    chairsChecking: [],
    chairsChecked: chairListData,
};

const CGVBookingRedux = createSlice({
    name: 'CGVBookingRedux',
    initialState,
    reducers: {
        handleConfirmModal: (state, { payload }) => {
            state.confirmModal = payload;
        },
        handleChecking: (state, { payload }) => {
            const isChecking = state.chairsChecking.findIndex(checking => checking.soGhe === payload.soGhe);

            if (state.chairsChecking.length < 8) {
                if (isChecking === -1) {
                    state.chairsChecking = [...state.chairsChecking, payload];
                } else {
                    state.chairsChecking = state.chairsChecking.filter(checking => checking.soGhe !== payload.soGhe);
                }
            } else if (isChecking === -1) {
                alert('Bạn chỉ có thể chọn tối đa 8 ghế');
            } else {
                state.chairsChecking = state.chairsChecking.filter(checking => checking.soGhe !== payload.soGhe);
            }
        },
        handleBooked: state => {
            state.chairsChecked = state.chairsChecked.map(row => {
                return {
                    ...row,
                    danhSachGhe: row.danhSachGhe.map(chair => {
                        const isBooked = state.chairsChecking.find(checking => checking.soGhe === chair.soGhe);
                        return isBooked ? { ...chair, daDat: true } : chair;
                    }),
                };
            });
            state.chairsChecking = [];
        },
    },
});

export const { reducer: CGVBookingReducer, actions: CGVBookingActions } = CGVBookingRedux;
