import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { CGVBookingActions } from '../store/CGVBookingRedux/slice';

const ChairsStyled = styled.button`
    border: 1px solid rgb(77 124 15);
    width: 32px;
    height: 32px;
    font-size: 14px;

    ${props =>
        props.$booked
            ? `
        background-color: #bbb;
        border: 1px solid #bbb;
        color: #fff;
    `
            : props.$booking
            ? `
        background-color: #b11500;
        border: 1px solid #b11500;
        color: #fff;
            `
            : ''}
`;

const BookingProcess = () => {
    const { chairsChecked } = useSelector(state => state.CGVBookingReducer);
    const { chairsChecking } = useSelector(state => state.CGVBookingReducer);
    const dispatch = useDispatch();

    const handleChecking = chair => {
        dispatch(CGVBookingActions.handleChecking(chair));
    };

    return (
        <div>
            <h1 className='font-bold text-center bg-[#bcbdc0] borer-y-2 border-[#d4d3c9] py-1'>Người / Ghế</h1>
            <div className='mt-8 mb-10'>
                <img src='./image/bg-screen.png' alt='' className='w-full' />
            </div>
            <div className='my-5 flex justify-center'>
                <div>
                    {chairsChecked.map(c => {
                        const { hang, danhSachGhe } = c;
                        return (
                            <div key={hang} className='flex'>
                                {danhSachGhe.map(d => {
                                    const { soGhe, daDat } = d;
                                    return (
                                        <ChairsStyled
                                            key={soGhe}
                                            $booked={daDat}
                                            disabled={daDat}
                                            $booking={chairsChecking.find(checking => checking === d)}
                                            className='flex items-center justify-center m-1.5'
                                            onClick={() => handleChecking(d)}
                                        >
                                            {soGhe}
                                        </ChairsStyled>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BookingProcess;
