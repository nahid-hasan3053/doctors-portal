import React from 'react';
import bg from '../../assets/images/footer.png'

const Footer = () => {
    return (
    <div className='p-10 bg-neutral text-neutral-content mt-10' style={{
        background: `url(${bg})`,
        backgroundSize: 'cover',
    }}>
        <footer className="footer">
            <nav>
                <h6 className="footer-title">Services</h6> 
                <a href=' ' className="link link-hover">Branding</a>
                <a href=' ' className="link link-hover">Design</a>
                <a href=' ' className="link link-hover">Marketing</a>
                <a href=' ' className="link link-hover">Advertisement</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Company</h6> 
                <a href=' ' className="link link-hover">About us</a>
                <a href=' ' className="link link-hover">Contact</a>
                <a href=' ' className="link link-hover">Jobs</a>
                <a href=' ' className="link link-hover">Press kit</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Legal</h6> 
                <a href=' ' className="link link-hover">Terms of use</a>
                <a href=' ' className="link link-hover">Privacy policy</a>
                <a href=' ' className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
        <aside className='text-center mt-6 text-sm'>
            <p>Copyright © 2024 - All right reserved by Nahid Hasan</p>
        </aside>
    </div>
    );
};

export default Footer;