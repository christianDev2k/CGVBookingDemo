import React from 'react';
import styled from 'styled-components';

const WapperHeaderMain = styled.div`
    background-image: url('./image/bg-top.png');
    background-repeat: repeat-x;
    background-position: top left;
    background-size: auto 100%;
`;

const NavbarItem = styled.li`
    padding: 0 18px;
    font-size: 14px;
    font-weight: 700;
    margin-top: 32px;
    position: relative;

    ${props =>
        props.$carrer &&
        `
        &::after {
            content: '';
            display: block;
            width: 30px;
            height: 30px;
            background-image: url('./image/hot-jobs.png');
            background-size: cover;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -10px;
        }
    `}
`;

const HeaderMain = () => {
    return (
        <WapperHeaderMain>
            <div className='max-w-screen-lg mx-auto flex items-center justify-between'>
                <a href='...' className='logo py-9'>
                    <img src='./image/cgvlogo.png' alt='' />
                </a>
                <ul className='navbar flex'>
                    <NavbarItem>
                        <a href='...'>PHIM</a>
                    </NavbarItem>
                    <NavbarItem>
                        <a href='...'>RẠP CGV</a>
                    </NavbarItem>
                    <NavbarItem>
                        <a href='...'>THÀNH VIÊN</a>
                    </NavbarItem>
                    <NavbarItem>
                        <a href='...'>CULTUREPLEX</a>
                    </NavbarItem>
                    <NavbarItem $carrer={true}>
                        <a href='...'>TUYỂN DỤNG</a>
                    </NavbarItem>
                </ul>
                <div className='flex items-center'>
                    <div>
                        <a href='...'>
                            <img src='./image/kenhcine.gif' alt='' />
                        </a>
                    </div>
                    <div>
                        <a href='...'>
                            <img src='./image/buy_tickets.png' alt='' />
                        </a>
                    </div>
                </div>
            </div>
        </WapperHeaderMain>
    );
};

export default HeaderMain;
