import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
<>
<div id="footer">
    <div id="footer-inside">
    <div id="left-footer">
<p>© Harrogate Interactive | North Yorkshire, UK </p>
<p>Web design | Software Development | Graphic Design</p>
</div>
<div id="right-footer">
    <p id="privacypolicyp" onClick={()=>{let priv = document.getElementById('privacypolicy');
        if(priv.style.display == "block") {priv.style.display = "none"} else {priv.style.display = "block"}}}>Privacy Policy</p>
    <a onClick={() => window.scrollTo(0, 0)} id="contactFooter"><Link to="/contact">Contact</Link></a>
</div>
</div>
<div id="privacypolicy">
    <h2>PRIVACY POLICY</h2>
    <p>The only place where we collect user data is through our contact form. This requests your name and email address in order for us to contact you. We will store these details in order to get back to you, but will delete them if you request it. Other than that, we don't store any details about you and don't use any third party cookies. Our hosting provider (Hostinger) might store information but you will have to contact them for those details.</p>
</div>
</div>
</>
)}

export default Footer; 