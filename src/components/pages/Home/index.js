import { React, useState} from 'react';
import video from "./video.mp4";
import lion from "./lion.jpg";
import ContactUs from "../ContactUs";
import FadeInSection from '../../common/FadeInSection'
import { MdOutlineWeb, MdOutlineStar, MdToggleOn, MdLocalLibrary, MdQuestionAnswer, MdAccessibilityNew, MdFavoriteBorder } from 'react-icons/md';
import { FaReact, FaHtml5, FaCss3, FaAngleDown, FaHeart } from 'react-icons/fa6';
import HGBackground from './hg2.jpg';

const Home = () => {

 
    

return (
    <div className="overall-container">
   <div className="fullscreen">
    <div className="letterbox" id="letterBox">
    <div className="hero-video-container">  <video loop muted autoPlay controls = '' className="hero-video"><source src={ video } type="video/mp4"/></video></div>
   <div className="hero-text"> <h1 className="large-feature-text">Digital creativity <span className=""><span className="standout-block">handmade</span> in Harrogate</span></h1></div>

 
    </div>
    </div>
    <div className="flex-centered-start">
    
    <div className="blue-panel" id="bluePanel"> 
    <FadeInSection>
    <h1 className="line-to-left gradient-text">rqwereqwrerWant something bespoke? You'll click with us.</h1></FadeInSection>
    <FadeInSection>
    <p className="intro-copy">At Harrogate Interactive we create custom digital products that look good and work beautifully. With experience in everything from branding and web design to education and online software development, we like to keep things versatile. We're also friendly and love to chat about - and find new ways of looking at - all aspects of life online.<br/><br/><span id="askUs">Ask us about: </span> 
        Branding | Graphic design | Copywriting | Web design | Web development | Software development | SharePoint development | React development | WordPress development | AI chatbot integration | Corporate education | Video creation 
        </p>
    </FadeInSection> 
    </div>

    <div className="contact-form-home"> 
    <h1 class="gradient-text-2 border-left"> Get in <span>touch</span></h1>
    <div className="contactHome">
    <ContactUs/>
</div>
    </div>

    
    
    </div>




    <div id="approach">
    <h1 id="ourApproach">Our Approach<br/>in <span id="one-underline">one</span> word</h1>
    <FadeInSection>
    <div id="skills">
        
    <button className="skillbutton" id="branding"><h2><MdOutlineStar/></h2><p className="branding-p">Branding</p></button>
        <button className="skillbutton" id="webDesign"><h2><MdOutlineWeb/></h2><p>Web design</p></button>
        <button className="skillbutton" id="softwareDevelopment"><h2><MdToggleOn/></h2><p>Software Development</p></button>
        <button className="skillbutton" id="corporateEducation"><h2><MdLocalLibrary/></h2><p>Education & Training</p></button>
        <button className="skillbutton" id="communications"><h2><MdQuestionAnswer/></h2><p>Internal Communications</p></button>
        {/* <button className="skillbutton" id="accessibility"><h2><MdAccessibilityNew/></h2><p>Web Accessibility</p></button>

        <button className="skillbutton" id="life"><h2><MdFavoriteBorder/></h2><p>Life</p></button> */}
   
        </div>
        </FadeInSection>
        </div>

        <FadeInSection>

<div id="techy-section" className="container">


<div id="techBox"><h1  className="line-to-left">We bring ideas to life.</h1><p>We love solving problems. It gives us to chance to get creative and to find new ways to innovate. So, if you want to make something special or achieve a goal, and you aren't too sure how to get there, we're able to help you to find a solution. We can take your rough concepts and smooth them out. Or we can start right at the beginning with research and then move on to ideation, design and development. Once we create the advert, logo, design system, online tool, app, educational module or game that you need, we'll keep finessing it until it looks beautiful and works brilliantly. We'll also make sure that it's part of the bigger picture, fitting into a campaign or concept that has evergreen value.</p></div>

<div id="iconsbox">

    <h2 className="icon" id="html5-icon">
    <FaHtml5/>
    </h2>
    <h2 className="icon" id="css3-icon">
    <FaCss3/>
    </h2>
    <h2 className="icon" id="react-icon">
    <FaReact/>
    </h2>
</div>

</div>
</FadeInSection>

<div id="harrogate_design_container">

<div className="harrogate_design" style={{backgroundImage: "linear-gradient(90deg, #000036aa,#00e5b3bb), url(" + HGBackground + ")"}}>
<h1 className="design_harrogate">Based in Yorkshire,<br/>serving the world</h1>

</div>
</div>



<div id="gamification" className="container">




<div className="flex-gamification">
    <div id="flex-gamification-left"><h1 className="line-to-left">Gamification</h1>
<p>If you make your brand interactive, it becomes <i>real</i>. Gamification lets users tap, click, hover and explore. It creates opportunities to interact, score points and enjoy. Gamification could involve an actual game. Or, it could simply be an approach that makes your app or learning module that bit more interesting. Gamification adds a layer of fun to just about anything. And people learn best when they're having fun.</p></div>
    <div id="flex-gamification-right"><div id="gamification-box"><div id="guess"><h2 className="gradient-text">Guess the word</h2><p id="clue">(Clue: It's how to get people really engaged)</p></div><div id="inputsforgame">
    <input id="g-button" type="text" maxlength="1" className="game_button" value="G" placeholder="G" style={{background: "var(--brand-feature)"}} disabled></input>
    <input id="a-button" type="text" maxlength="1"  className="game_button" style={{background: "rgba(255,150,150,1"}} placeholder="_"  onChange={(evt) => { console.log(evt.target.value); if(evt.target.value == "A" || evt.target.value == "a") {evt.target.style.background = "var(--brand-feature)"} }}></input>
    <input id="m-button" type="text" maxlength="1" className="game_button" value="M" placeholder="M" style={{background: "var(--brand-feature)"}} disabled></input>
    <input id="e-button" type="text" maxlength="1" className="game_button" value="E" placeholder="E" style={{background: "var(--brand-feature)"}} disabled></input>
    <input id="s-button" type="text" maxlength="1" className="game_button" value="S" placeholder="S" style={{background: "var(--brand-feature)"}} disabled></input></div>
    </div>
    </div>
</div>

</div>



<div className="offering-area">



<div id="offerings">
<h1 className="brand-text underlined">What we do</h1>
<div className="offering">
<h2>Consulting <FaAngleDown className="faangledown"/></h2>
<ul><li>Assessment of your creative work, software or educational material</li>
<li>Advice and strategies for moving ahead</li></ul>
</div>

<div className="offering">
<h2>Creative <FaAngleDown className="faangledown"/></h2>
<ul><li>Ideation and creating new concepts</li>
<li>Strategies for campaigns tying together concepts</li></ul>
</div>

<div className="offering">
<h2>Websites <FaAngleDown className="faangledown"/></h2>
<ul><li>Custom websites designed and created exactly for you</li>
<li>The tech matches your requirements</li>
<li>Ongoing support after the initial build</li></ul>
</div>

<div className="offering">
<h2>Software <FaAngleDown className="faangledown"/></h2>
<ul><li>Bespoke software hand-coded in Harrogate</li>
<li>Focusing on online, browser-accessible solutions</li>
<li>Graphic design and user experience (UX) are a focus</li></ul>
</div>

<div className="offering">
<h2>Advertising <FaAngleDown className="faangledown"/></h2>
<ul><li>Coming up with creative concepts that cut through the clutter</li>
<li>Able to create single assets and entire campaigns</li></ul>
</div>

<div className="offering">
<h2>Copywriting <FaAngleDown className="faangledown"/></h2>
<ul><li>Name generation for products and brands</li>
<li>Writing creative copy</li>
<li>Writing scripts</li>
<li>Setting the perfect tone of voice for your brand</li></ul>
</div>

<div className="offering">
<h2>Content writing <FaAngleDown className="faangledown"/></h2>
<ul><li>Content Strategy</li>
<li>SEO optimisation</li></ul>
</div>

<div className="offering">
<h2>Graphic design <FaAngleDown className="faangledown"/></h2>
<ul><li>Logos and branding</li>
<li>Brand guidelines</li>
<li>Design systems</li>
<li>Creative assets for advertising, social media and websites</li></ul>
</div>

<div className="offering">
<h2>Education <FaAngleDown className="faangledown"/></h2>
<ul><li>Feedback on your current modules and approach</li>
<li>Bespoke learning focusing on quality and interactivity</li>
<li>Gamification, ranging from games to adding gamified elements</li>
<li>Roadmaps into the future for your learning cohort</li></ul>
</div>

<div className="offering">
<h2>Landing pages <FaAngleDown className="faangledown"/></h2>
<ul><li>Special one-off pages to make a campaign or idea stand out</li>
<li>Interactive and engaging - something that people want to access</li>
<li>Can become evergreen apps, tools or games</li>
<li>We have experience in SharePoint, WordPress, ServiceNow, Drupal and more. Whatever system or CMS you're using, we can create something to fit.</li></ul>
</div>


</div>

</div>
{/* 
<div id="tech-used">
<h2>We <FaHeart/> tech</h2>
<p>This is some of what we rely on to deliver our service</p>

</div> */}

    </div>
)}

export default Home; 