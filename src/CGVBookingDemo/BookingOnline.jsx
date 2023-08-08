import React from 'react';
import ChairList from './ChairList';

const BookingOnline = () => {
    return (
        <div className='py-[30px] bg-[#fdfcf0]'>
            <div className='max-w-screen-lg mx-auto '>
                <div className='border-2 border-[#d4d3c9]'>
                    <ChairList />
                </div>
            </div>
        </div>
    );
};

export default BookingOnline;
