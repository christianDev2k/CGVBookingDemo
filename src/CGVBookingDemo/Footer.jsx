import React from 'react';
import FooterNavbar from './FooterNavbar';
import { styled } from 'styled-components';

const CGVLogo = styled.div`
    width: 120px;
    height: 43px;
    background-image: url('./image/common_sprite_area.png');
    background-position: -145px -319px;
`;

const BGBottomFooter = styled.div`
    background-image: url('./image/bg-bottom-footer.jpg');
    background-repeat: repeat-x;
    padding-bottom: 114px;
`;

const Footer = () => {
    return (
        <div className='bg-[#fdfcf0] text-sm text-[#636363]'>
            <div className='mx-auto border-y-2 border-black pt-2'>
                <div className='max-w-screen-lg mx-auto'>
                    <img src='./image/brand-type-film-footer_ver2.png' alt='' />
                </div>
            </div>
            <FooterNavbar />
            <div className='py-4'>
                <div className='max-w-screen-lg mx-auto'>
                    <div className='flex items-center'>
                        <CGVLogo></CGVLogo>
                        <div className='grow'>
                            <h4 className='font-bold mb-2'>CÔNG TY TNHH CJ CGV VIETNAM</h4>
                            <div className='text-[13px]'>
                                <p>
                                    Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5
                                    ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.
                                </p>
                                <p>Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.</p>
                                <p>Hotline: 1900 6017</p>
                                <p>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BGBottomFooter></BGBottomFooter>
        </div>
    );
};

export default Footer;
