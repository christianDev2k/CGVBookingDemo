import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CGVBookingActions } from '../store/CGVBookingRedux/slice';
import { CheckCircleOutlined, HeartTwoTone } from '@ant-design/icons';

const CheckoutConfirm = () => {
    const { confirmModal } = useSelector(state => state.CGVBookingReducer);
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(CGVBookingActions.handleConfirmModal(false));
    };

    return (
        <Modal open={confirmModal} footer={null} onCancel={handleCancel} className='text-center'>
            <CheckCircleOutlined className='text-5xl text-green-600 mb-4' />
            <div className='text-lg'>
                <p>Thanh toán thành công!</p>
                <p>Cảm ơn bạn đã chọn xem phim tại CGV</p>
                <p className='flex items-center justify-center'>
                    Chúc bạn có một buổi xem phim vui vẻ <HeartTwoTone twoToneColor='#eb2f96' className='ml-1' />
                </p>
            </div>
        </Modal>
    );
};

export default CheckoutConfirm;
