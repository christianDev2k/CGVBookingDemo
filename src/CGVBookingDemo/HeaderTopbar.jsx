import React from 'react';
import styled from 'styled-components';

const TopBarItem = styled.li`
    display: flex;
    align-items: center;
`;

const ToogleLang = styled.button`
    margin-bottom: 0;
    padding: 2px 10px;
    color: #fff;
    background-color: ${props => props.$active || '#898987'};
`;

const HeaderTopbar = () => {
    return (
        <div className='text-[#666] bg-[#fdfcf0] py-1'>
            <div className='max-w-screen-lg mx-auto'>
                <ul className='flex justify-end items-center text-sm'>
                    <TopBarItem>
                        <img className='mr-1' src='./image/icon_promotion25.png' alt='' />
                        <a href='...'>TIN MỚI & ƯU ĐÃI</a>
                    </TopBarItem>
                    <TopBarItem className='ml-5'>
                        <img className='mr-1' src='./image/icon_ticket25.png' alt='' />
                        <a href='...'>VÉ CỦA TÔI</a>
                    </TopBarItem>
                    <TopBarItem className='ml-9'>
                        <img className='mr-1' src='./image/icon_login25.png' alt='' />
                        <a href='...'>XIN CHÀO, HOÀNG NHÂN!</a>
                        <a href='...' className='ml-1'>
                            THOÁT
                        </a>
                    </TopBarItem>
                    <li className='ml-2.5 rounded-md overflow-hidden'>
                        <ToogleLang $active='#e71a0f'>VN</ToogleLang>
                        <ToogleLang>EN</ToogleLang>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderTopbar;
