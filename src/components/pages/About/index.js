import { React, useState} from 'react';
import ContactUs from "../ContactUs";
import FadeInSection from '../../common/FadeInSection'
import { FaShirt, FaWrench, FaPen } from 'react-icons/fa6';
import Sheep from './sheep.jpg';
import HGBackground from './harrogate.jpg';
import lightbulb from './lightbulb2.jpg';
import jogger from './jogger2.jpg'
import laptopWordpress from './laptopwordpress.jpg'
const About = () => {


return (
<>
<div className="overall-container">
<div className="fullscreen">
    <div className="letterbox pink">
    <div className="hero-text"> <h1 className="large-feature-text">Serious about messing around with computers</h1></div>
    <div className="dogoffice"><img src={lightbulb}/></div>

   
 
    </div>
    </div>

<div id="double">
<div class="container half">
<h1 className="gradient-text-3">About me</h1>
<p className="whoweare">Based in Harrogate, North Yorkshire, I work in corporate education and awareness, getting stuck into all things design, copywriting, course creation and coding. Over the 20+ years (gulp) that I've been working, I've spent most of my time in <span className="highlighter">creative advertising</span>, <span className="highlighter">marketing</span>, <span className="highlighter">online software development</span> and <span className="highlighter">education</span>. </p>
</div>

<div className="feature-container-right">
    <img className="hackabilityimage" src={jogger} alt="jogger and dog"/>
</div>

</div>

{/* <div class="whatwestandfor">
<h1 className="gradient-text-3">About this site</h1>
<p className="whoweare">We take pride in our work. Everything we do might be digital, but we believe we add a hand-crafted, human-finished touch. When we deliver, we never settle for 'fine', 'OK' or 'all right'. We go above and beyond. This means that we tweak. We finesse. We perfect things. By focusing on projects in this way, we're able to <span className="highlighter">get results quickly</span>, <span className="highlighter">find the most effective solutions</span> and <span className="highlighter">make optimal decisions</span>. We stand for quality. We stand for thoughtfulness. We stand for innovation.</p>
</div> */}


<br/>
<div className="blue-panel-2">
    <div className="restrainer">
<h1 className="gradient-text">About this site</h1>
<p>Harrogate interactive is a cross between a blog and place to store the projects I work on in my spare time. These are things like apps, games and interactive tools. The reason I work on this stuff is because I enjoy building things. For me creating with HTML is a bit like playing with Lego - a little bit therapeutic and lot of fun. These interactive projects also inform my day job in education and awareness: I like to keep on top of what's possible on the web and to be aware of how sites and apps are put together.<br/><br/> 

</p>
</div>
</div>

<div id="double">
<div class="container half">
<h1 className="gradient-text-3">How the site is put together</h1>
<p className="whoweare">Harrogate Interactive is built using React, the ever-popular Javascript framework, combined with WordPress, the world's most prevalent web content management system. I've combined the two so that I can easily create components and updates to the interface using React and then easily create blog posts if needed using the user-friendly WordPress interface (no need to crack open my laptop even, because I can log in on my phone). So, it's a best-of-both worlds site in terms of maintenance and useability for me. <a href="http://localhost:3000/headless-wordpress-and-react-best-of-both-worlds" target="_blank" className="readmore">Read more here ></a></p>
</div>

<div className="feature-container-right">
    <img className="hackabilityimage" style={{transform: "rotate(-5deg)"}} src={laptopWordpress} alt="jogger and dog"/>
</div>

</div>




<div className="whatwedo">
<h1 className="gradient-text-3">My interests</h1>
<p class="whoweare">Advertising | Creativity | User Experience (UX) | User Interface (UI) | Website Design and Development | Graphic Design | Content Creation | Video Production | Copywriting | Content Strategy | Online app development | Branding and Identity Development | Interactive Experiences </p>
</div>




<br/>

<div id="harrogate_design_container_2">

<div className="harrogate_design" style={{backgroundImage: "linear-gradient(90deg, #000036aa,#00e5b3bb), url(" + HGBackground + ")"}}>
<h1 className="design_harrogate">Based in fun, friendly<br/>Yorkshire</h1>

</div>
</div>





</div>


</>
    
)}

export default About; 