import React from 'react'

const Footer = () => {
    return (
        
<footer className="footer bg-navbar">
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/">Contact</a>
        </li>
        <li>
            <a href="/">Support</a>
        </li>
    </ul>
    <ul>
        <a href="/">
            <i className="fab fa-facebook-square"></i>
        </a>
        <a href="/">
            <i className="fab fa-twitter-square"></i>
        </a>
        <a href="/">
            <i className="fab fa-instagram"></i>
        </a>
    </ul>
    <ul>
        <li><a href="/">© Agora Devs 2019</a></li>
        <li><a href="https://saulcorona.com" target="_blank" rel="noopener noreferrer">Made with love by Saúl Corona</a></li>
    </ul>
</footer>
        
    )
}

export default Footer
