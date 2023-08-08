import React from 'react';
import BookingProcess from './BookingProcess';
import ResultBooking from './ResultBooking';

const ChairList = () => {
    return (
        <div>
            <h1 className='bg-[#231d1c] text-white font-bold text-lg text-center p-1.5'>BOOKING ONLINE</h1>
            <div className='bg-[#fff1ce] p-2.5 text-sm font-bold'>
                <p>CGV Sư Vạn Hạnh Mall | Cinema 7 | Số ghế (117/117)</p>
                <p>07/08/2023 17:10 ~ 07/08/2023 19:32</p>
            </div>
            <div className='mt-5'>
                <BookingProcess />
                <ResultBooking direct={'next'} />
            </div>
        </div>
    );
};

export default ChairList;
