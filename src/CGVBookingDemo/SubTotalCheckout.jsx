import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SubTotalBlock = styled.div`
    background-color: #fff1ce;
    text-align: center;
    font-weight: 700;
    margin-bottom: 20px;

    .row {
        padding: 10px;
        border: 1px solid #d4d3c9;
        &.subtotal {
            background-color: #e71a0f;
            color: #fff;
        }
    }

    .total {
        background-color: #d0cece;
        font-size: 16px;
    }
`;

const SubTotalCheckout = () => {
    const { chairsChecking } = useSelector(state => state.CGVBookingReducer);

    let totalChecking = chairsChecking
        ? chairsChecking.reduce((acc, chair) => {
              return (acc += chair.gia);
          }, 0)
        : 0;

    totalChecking = totalChecking.toLocaleString('vi-VN');

    return (
        <div className='text-sm'>
            <SubTotalBlock>
                <h4 className='row'>Tổng cộng</h4>
                <div className='row grid grid-cols-4 font-normal'>
                    <div className=''>STD</div>
                    <div className='col-span-2'>{totalChecking},00 đ</div>
                    <div></div>
                </div>
                <div className='row total'>{totalChecking},00 đ</div>
            </SubTotalBlock>

            <SubTotalBlock>
                <h4 className='row'>Khuyến mãi</h4>
                <div className='row total'>0,00 đ</div>
            </SubTotalBlock>

            <SubTotalBlock>
                <h4 className='row subtotal'>Tổng số tiền thanh toán</h4>
                <div className='row total'>{totalChecking},00 đ</div>
            </SubTotalBlock>
        </div>
    );
};

export default SubTotalCheckout;
