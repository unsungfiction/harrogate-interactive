import { React, useState} from 'react';
import ContactUs from "../ContactUs";
import FadeInSection from '../../common/FadeInSection'
import { FaShirt, FaWrench, FaPen } from 'react-icons/fa6';
import Sheep from './sheep.jpg';
import HGBackground from './harrogate.jpg';

const About = () => {


return (
<>
<div className="overall-container">
<div className="fullscreen">
    <div className="letterbox" id="letterBox">
    <div className="sheep-container">  <img className="sheep" src={Sheep}/></div>
   <div className="hero-text"> <h1 className="large-feature-text">Software that<br></br><span className="standout-block">stands out</span></h1></div>

 
    </div>
    </div>

<div id="double">
<div class="container half">
<h1 className="gradient-text-3">Who we are</h1>
<p className="whoweare">Based in Harrogate, North Yorkshire, we are a <span className="mark">boutique creative agency</span> focusing on design, copywriting, course creation and coding. Our experience goes back twenty years and covers <span className="highlighter">advertising</span>, <span className="highlighter">marketing</span>, <span className="highlighter">online software development</span> and <span className="highlighter">education</span>. We have worked for creative agencies and in-house. We have worked in a spread of industries and countries. If you can think of it, we've probably done it. And if we haven't done it, we'll find a way.</p>
</div>


<div id="experience-div">
<h2 id="experience-side">Experience<br/></h2>
    <h2>More than</h2>
    <h2 id="bigtwenty" className="gradient-text-animated">20</h2>
    <h2>years</h2>
</div>


</div>

<div class="whatwestandfor">
<h1 className="gradient-text-3">What we stand for</h1>
<p className="whoweare">We take pride in our work. Everything we do might be digital, but we believe we add a hand-crafted, human-finished touch. When we deliver, we never settle for 'fine', 'OK' or 'all right'. We go above and beyond. This means that we tweak. We finesse. We perfect things. By focusing on projects in this way, we're able to <span className="highlighter">get results quickly</span>, <span className="highlighter">find the most effective solutions</span> and <span className="highlighter">make optimal decisions</span>. We stand for quality. We stand for thoughtfulness. We stand for innovation.</p>
</div>
<br/>
<div className="blue-panel-2">
    <div className="restrainer">
<h1 className="gradient-text">Creative + Tech = Our secret formula</h1>
<p>We love getting deep into graphic design, copywriting and creativity of all kinds. We also relish the chance to get stuck into 'techy' stuff. Building websites. Creating tools. Designing apps. It might sound like we're biting off more than we can chew, but it's all related. Whether it's a brand new brand or a hard-to-create piece of software, we make sure that it works perfectly and looks great.</p>
</div>
</div>

<div className="whatwedo">
<h1 className="gradient-text-3">What we offer</h1>
<p class="whoweare">Advertising | Creativity | User Experience (UX) and User Interface (UI) Design | Website Design and Development | Graphic Design | Content Creation | Search Engine Optimization (SEO) | Video Production | Copywriting and Content Strategy | Online app development | Branding and Identity Development | Interactive Experiences | Consulting</p>
</div>



<div className="howwe">




<div className="container half">
<h1 className="gradient-text-3">How we work</h1>
<p class="whoweare"> We love meeting new people and like to kick off any project with a chat, either online or in person, about the requirements. This is to work out your <span className="highlighter">goals</span>, <span className="highlighter">audience</span>, and <span className="highlighter">creative objectives</span>. Deadlines, for the various stages of delivery, are decided. The 'B' word is also mentioned at this stage: budget.<br/><span className="tab"></span>Next, we go away and follow our own adaptation of the <span className="highlighter">agile process</span>, iteratively building on drafts, sketches and concepts, refining until our own creative standards are met.<br/><span className="tab"></span>Once a first version is completed - in other words, something exciting we want to show you - we come to you as a partner for feedback that we can use for further refinement. For us, <span className="highlighter">transparency is vital</span> and we're never afraid to share our thoughts and give honest updates on progress. <br/><span className="tab"></span>Our final stage is that there often is no final stage. We accept that amends are a part of the process. And futher down the line, almost every creative endevour requires refreshment. All websites, web pages, games and online tools require maintenance. We're committed to being <span className="highlighter">a responsible partner</span> and to offering you the benefit of our <span className="highlighter">digital creativity hand-made in Harrogate</span>.</p>
</div>


<div id="shirt">
    <p className="beenthere">We've been there</p>
<FaShirt className="shirtClass"/>
<p className="beenthere">and got one of these</p>
</div>

</div>

<br/>

<div id="harrogate_design_container_2">

<div className="harrogate_design" style={{backgroundImage: "linear-gradient(90deg, #000036aa,#00e5b3bb), url(" + HGBackground + ")"}}>
<h1 className="design_harrogate">Based in Yorkshire,<br/>serving the world</h1>

</div>
</div>





</div>


</>
    
)}

export default About; 