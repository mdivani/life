import React from 'react';
import logo from '../logo.png';

const Footer = () => (
    <footer className='footer'>
        <img src={logo} alt='Logo' className='footer__logo' />
        <p className='footer__text'>
            designed and build using React.js by 
            &nbsp;<a 
                    className='footer__link' 
                    href='https://mdivani.me' 
                    rel="noopener noreferrer"
                    target='_blank'>George Mdivani</a>
            <span className='footer__copy'>&copy; - 2018</span>
        </p>
    </footer>
);

export default Footer;