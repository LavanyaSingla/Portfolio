import React, { useRef } from 'react';
import './contact.css';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.jpg';
import leetcode from '../../images/leetcode.png';
import gfg from '../../images/gfg.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_YOUR_SERVICE_ID,
            process.env.REACT_APP_YOUR_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_YOUR_PUBLIC_KEY
        ).then(
            () => {
                console.log('SUCCESS!');
                alert('Email sent successfully!');
            },
            (error) => {
                console.log('FAILED...', error);
                alert('Email sending failed. Please try again.');
            }
        );
    };

    return (
        <div id='contact'>
            <h1 className='contactTitle'>Contact Me</h1>
            <span className='contactDesc'>Please write a message for any query.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name="your_name" required />
                <input type="email" className='email' placeholder='Your Email' name="your_email" required />
                <textarea name="message" rows="5" className="msg" placeholder='Your message' required></textarea>
                <button className='btn' type="submit">Submit</button>
                <div className="links">
                    <a href={process.env.REACT_APP_LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className='link' />
                    </a>
                    <a href={process.env.REACT_APP_GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="Github" className='link' />
                    </a>
                    <a href={process.env.REACT_APP_LEETCODE_LINK} target="_blank" rel="noopener noreferrer">
                        <img src={leetcode} alt="Leetcode" className='link' />
                    </a>
                    <a href={process.env.REACT_APP_GFG_LINK} target="_blank" rel="noopener noreferrer">
                        <img src={gfg} alt="GFG" className='link' />
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Contact;
