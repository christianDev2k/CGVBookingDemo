import React from 'react';
import CheckoutStepOne from './CheckoutStepOne';
import CheckoutStepTwo from './CheckoutStepTwo';
import SubTotalCheckout from './SubTotalCheckout';
import ResultBooking from './ResultBooking';

const Checkout = () => {
    return (
        <div className='bg-[#fdfcf0]'>
            <div className='max-w-screen-lg mx-auto py-[30px]'>
                <h1 className='bg-[#231d1c] text-white font-bold text-lg text-center p-1.5'>THANH TOÁN</h1>
                <div className='my-[30px] flex gap-5'>
                    <div className='w-8/12'>
                        <CheckoutStepOne />
                        <CheckoutStepTwo />
                    </div>
                    <div className='w-4/12'>
                        <SubTotalCheckout />
                    </div>
                </div>
                <ResultBooking direct={'payment'}/>
            </div>
        </div>
    );
};

export default Checkout;
