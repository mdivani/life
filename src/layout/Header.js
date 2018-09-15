import React from 'react';

const Header = () => (
    <header className='header'>
        <h1 className='header__heading'>
            game of life
            <span className='header__heading--sub'>
            &nbsp;by <a 
                        className='header__link' 
                        href='https://en.wikipedia.org/wiki/John_Horton_Conway' 
                        rel="noopener noreferrer"
                        target='_blank'>John Horton Conway</a>
            </span>
        </h1>
    </header>
);

export default Header;
