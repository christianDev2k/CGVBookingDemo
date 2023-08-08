import React from 'react';
import HeaderTopbar from './HeaderTopbar';
import HeaderMain from './HeaderMain';

const Header = () => {
    return (
        <div className='container mx-auto'>
            <HeaderTopbar />
            <HeaderMain />
        </div>
    );
};

export default Header;
