import React from 'react';
import { UndoOutlined } from '@ant-design/icons';
import { StepTitle } from './StyledComponent/styled';

const CheckoutStepOne = () => {
    return (
        <div className='text-sm'>
            <StepTitle>
                <h4>
                    Bước 1: <span>GIẢM GIÁ</span>
                </h4>
                <div className='flex items-center font-bold text-sm'>
                    <UndoOutlined />
                    <p className='ml-1'>Đặt lại</p>
                </div>
            </StepTitle>
            <p className='text-sm mt-2.5 mb-3.5'>
                Hiện tại tính năng thanh toán bằng Voucher, Coupon, Điểm trên Website đang bảo trì, để sử dụng vui lòng
                tải/cập nhật ứng dụng CGV mới nhất để tiếp tục.
            </p>
            <p className='bg-[#fff1ce] px-4 py-1.5'>Đối tác</p>
            <p className='bg-[#fff1ce] px-4 py-1.5 mt-1.5'>Mã khuyến mãi</p>
        </div>
    );
};

export default CheckoutStepOne;
