import React, { useState } from 'react';
import { StepTitle } from './StyledComponent/styled';
import { Radio, Space } from 'antd';

const CheckoutStepTwo = () => {
    const [value, setValue] = useState(1);
    const onChange = e => {
        setValue(e.target.value);
    };

    return (
        <div className='mt-5'>
            <StepTitle>
                <h4>
                    Bước 2: <span>HÌNH THỨC THANH TOÁN</span>
                </h4>
            </StepTitle>
            <div className='bg-[#fff1ce] mt-1.5 px-4'>
                <Radio.Group onChange={onChange} value={value}>
                    <Space direction='vertical'>
                        <Radio value={1} className='py-0.5'>
                            <div className='flex items-center'>
                                <img src='./image/atm_icon.png' alt='' className='w-10 mr-2' />
                                <span>ATM Card (Thẻ nội địa)</span>
                            </div>
                        </Radio>
                        <Radio value={2} className='py-0.5'>
                            <div className='flex items-center'>
                                <img src='./image/visa-mastercard-icon.png' alt='' className='w-10 mr-2' />
                                <span>Thẻ quốc tế (Visa, Master, Amex, JCB)</span>
                            </div>
                        </Radio>
                        <Radio value={3} className='py-0.5'>
                            <div className='flex items-center'>
                                <img src='./image/momo_icon.png' alt='' className='w-10 mr-2' />
                                <span className='font-bold'>MoMo - Nhập TRIKYMOMO giảm 15K vào T7-CN</span>
                            </div>
                        </Radio>
                        <Radio value={4} className='py-0.5'>
                            <div className='flex items-center'>
                                <img src='./image/icon-HOT-96x96.png' alt='' className='w-10 mr-2' />
                                <span className='font-bold'>ZaloPay: Bạn Mới vé 14k - Bạn Thân vé 84K</span>
                            </div>
                        </Radio>
                        <Radio value={5} className='py-0.5'>
                            <div className='flex items-center'>
                                <img src='./image/shopeepay96x96.png' alt='' className='w-10 mr-2' />
                                <span>ShopeePay</span>
                            </div>
                        </Radio>
                    </Space>
                </Radio.Group>
            </div>
        </div>
    );
};

export default CheckoutStepTwo;
