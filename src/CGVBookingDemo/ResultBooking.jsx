import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CGVBookingActions } from '../store/CGVBookingRedux/slice';

const ResultWrapper = styled.div`
    position: relative;
    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background-image: url('./image/bg-bottom-seatmap.png');
        background-repeat: repeat-x;
        transform: rotate(180deg);
        background-position: 0 0;
    }
    &::after {
        top: 100%;
        transform: translateY(-100%);
    }
`;

const DirectButton = styled.button`
    background-image: url('./image/bg-cgv-button-process.png');
    width: 106px;
    height: 106px;
    margin: 0 2px;
    background-position: ${props =>
        props.$direct === 'next' ? '-151px -440px' : props.$direct === 'payment' ? '-151px -111px' : '149px 0'};
`;

const PosterImg = styled.img`
    width: 74px;
`;

const ResultTitle = styled.span`
    display: inline-block;
    width: 100px;
    margin-bottom: 6px;
    font-weight: 400;
`;

const ResultBooking = ({ direct }) => {
    const { chairsChecking } = useSelector(state => state.CGVBookingReducer);
    const dispatch = useDispatch();

    let totalChecking = chairsChecking
        ? chairsChecking.reduce((acc, chair) => {
              return (acc += chair.gia);
          }, 0)
        : 0;

    totalChecking = totalChecking.toLocaleString('vi-VN');

    const handleCheckOut = () => {
        if (direct === 'payment') {
            dispatch(CGVBookingActions.handleConfirmModal(true));
            dispatch(CGVBookingActions.handleBooked());
        }
        if (!chairsChecking.length) alert('Vui lòng chọn ghế trước khi đến trang thanh toán!');
    };

    return (
        <ResultWrapper className='flex text-white bg-black py-8 text-sm gap-4'>
            <Link to='/' className='justify-self-center'>
                <DirectButton></DirectButton>
            </Link>
            <div className='flex w-3/12'>
                <PosterImg src='./image/conan_movie_26_-_vietnamese_poster.jpg' className='mr-4' alt='' />
                <h4 className='font-bold'>PHIM ĐIỆN ẢNH THÁM TỬ LỪNG DANH CONAN: TÀU NGẦM SẮT MÀU ĐEN 2D K</h4>
            </div>
            <div className='font-bold grow'>
                <div>
                    <ResultTitle>Rạp</ResultTitle>
                    <span>CGV Sư Vạn Hạnh</span>
                </div>
                <div>
                    <ResultTitle>Suất chiếu</ResultTitle>
                    <span>17:30, 06/08/2023</span>
                </div>
                <div>
                    <ResultTitle>Phòng chiếu</ResultTitle>
                    <span>Cinema 3</span>
                </div>
                <div className='flex'>
                    <ResultTitle>Ghế</ResultTitle>
                    <span className='inline-flex flex-wrap'>
                        {chairsChecking.map(chair => (
                            <span key={chair.soGhe} className='mr-1'>
                                {chair.soGhe}
                            </span>
                        ))}
                    </span>
                </div>
            </div>
            <div className='font-bold'>
                <div>
                    <ResultTitle>Giá vé</ResultTitle>
                    <span>{totalChecking},00 ₫</span>
                </div>
                <div>
                    <ResultTitle>Combo</ResultTitle>
                    <span>0,00 ₫</span>
                </div>
                <div>
                    <ResultTitle>Tổng</ResultTitle>
                    <span>{totalChecking},00 ₫</span>
                </div>
            </div>
            <Link
                to={direct === 'payment' ? '/' : chairsChecking.length ? '/checkout' : '/'}
                className='justify-self-center'
            >
                <DirectButton $direct={direct} onClick={handleCheckOut}></DirectButton>
            </Link>
        </ResultWrapper>
    );
};

export default ResultBooking;
