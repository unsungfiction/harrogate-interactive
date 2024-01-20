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
<button onClick={()=>{document.getElementById('privacypolicy').style.display = 'none'}}>X</button>
    <h2>PRIVACY POLICY</h2>
    <p>The only place where this site collects user data is through the contact form. This requests your name and email address, which will be stored in order to get back to you, but can be deleted if you request it. Other than that, we don't store any details about you and don't use any third party cookies - the only cookies used are in the some of the apps and tools, just to make them work. Our hosting provider might store information but you will have to contact them for those details.</p>
    
</div>
</div>
</>
)}

export default Footer; 