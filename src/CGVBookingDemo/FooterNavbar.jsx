import React from 'react';
import { styled } from 'styled-components';

const FooterTitle = styled.h4`
    font-weight: 700;
    margin-bottom: 10px;
`;

const FooterItems = styled.li`
    margin: 2px 0;
`;

const FooterSocial = styled.a`
    width: 39px;
    height: 39px;
    border: 0;
    transition: all 0.2s;
    background-image: url('./image/bg-social-footer-40.png');
    background-position: ${props => (props.$socials === 'facebook' ? '-9px -3px' : '-192px -3px')};

    &:hover {
        transform: scale(0.85);
    }
`;

const FooterNavbar = () => {
    return (
        <div className='mx-auto border-b-2 border-black py-5'>
            <div className='max-w-screen-lg mx-auto'>
                <div className='grid grid-cols-4'>
                    <div>
                        <FooterTitle>CGV Việt Nam</FooterTitle>
                        <ul>
                            <FooterItems>
                                <a href='...'>Giới Thiệu</a>
                            </FooterItems>
                            <FooterItems>
                                <a href='...'>Tiện Ích Online</a>
                            </FooterItems>
                            <FooterItems>
                                <a href='...'>Thẻ Quà Tặng</a>
                            </FooterItems>
                            <FooterItems>
                                <a href='...'>Tuyển Dụng</a>
                            </FooterItems>
                            <FooterItems>
                                <a href='...'>Liên Hệ Quảng Cáo CGV</a>
                            </FooterItems>
                        </ul>
                    </div>
                    <div>
                        <FooterTitle>Điều khoản sử dụng</FooterTitle>
                        <ul>
                            <FooterItems>
                                <a href='...'>Điều Khoản Chung</a>
                            </FooterItems>
                            <FooterItems>
                                <a href='...'>Điều Khoản Giao Dịch</a>
                            </FooterItems>
                            <FooterItems>
                                <a href='...'>Chính Sách Thanh Toán</a>
                            </FooterItems>
                            <FooterItems>
                                <a href='...'>Chính Sách Bảo Mật</a>
                            </FooterItems>
                            <FooterItems>
                                <a href='...'>Câu Hỏi Thường Gặp</a>
                            </FooterItems>
                        </ul>
                    </div>
                    <div>
                        <FooterTitle>Kết nối với chúng tôi</FooterTitle>
                        <div className='flex'>
                            <FooterSocial href='...' $socials='facebook' className='mr-2'></FooterSocial>
                            <FooterSocial href='...' $socials='zalo'></FooterSocial>
                        </div>
                        <div>
                            <img src='./image/cong-thuong.png' alt='' />
                        </div>
                    </div>
                    <div>
                        <FooterTitle>Chăm sóc khách hàng</FooterTitle>
                        <ul>
                            <FooterItems>
                                <a href='...'>Hotline: 1900 6017</a>
                            </FooterItems>
                            <FooterItems>
                                <a href='...'>Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)</a>
                            </FooterItems>
                            <FooterItems>
                                <a href='...'>Email hỗ trợ: hoidap@cgv.vn</a>
                            </FooterItems>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterNavbar;
