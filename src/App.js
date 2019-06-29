import React from 'react';
import videoplayback from './Assets/videos/video.mp4';
import './Assets/css/bootstrap.min.css'
import './Assets/css/bootstrap-theme.min.css'
import './Assets/css/fontAwesome.css'
import './Assets/css/templatemo-style.css'
import homeIcon from './Assets/img/home-icon.png';
import aboutIcon from './Assets/img/about-icon.png';
import featuredIcon from './Assets/img/featured-icon.png';
import projectsIcon from './Assets/img/projects-icon.png';
import contactIcon from './Assets/img/contact-icon.png';

import Featured from './Assets/img/left-feature-image.png';
import project1 from "./Assets/img/project-item-01.jpg";
import project2 from "./Assets/img/project-item-02.jpg";
import project3 from "./Assets/img/project-item-03.jpg";
import project4 from "./Assets/img/project-item-04.jpg";
import $ from 'jquery';
import Welcome from './Components/Welcome';
import About from './Components/About';

class App extends React.Component {

  componentDidMount(){
    $(document).ready(function($){
      var slidesWrapper = $('.cd-hero-slider');
      if ( slidesWrapper.length > 0 ) {
      var primaryNav = $('.cd-primary-nav'),
      sliderNav = $('.cd-slider-nav'),
      navigationMarker = $('.cd-marker'),
      slidesNumber = slidesWrapper.children('li').length,
      visibleSlidePosition = 0,
      autoPlayId,
      autoPlayDelay = 5000;
      uploadVideo(slidesWrapper);
    
      //autoplay slider
      setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay);
    
   
    function setAutoplay(wrapper, length, delay) {
      if(wrapper.hasClass('autoplay')) {
        clearInterval(autoPlayId);
        autoPlayId = window.setInterval( delay);
        //console.log("here")
      }
    }
    
   
    
    function uploadVideo(container) {
      container.find('.cd-bg-video-wrapper').each(function(){
        var videoWrapper = $(this);
        if( videoWrapper.is(':visible') ) {
          // if visible - we are not on a mobile device 
          var videoUrl = videoWrapper.data('video'),
            video = $('<video loop><source src="'+videoUrl+'.mp4" type="video/mp4" /><source src="'+videoUrl+'.webm" type="video/webm" /></video>');
          video.appendTo(videoWrapper);
          // play video if first slide
          if(videoWrapper.parent('.cd-bg-video.selected').length > 0) video.get(0).play();
        }
      });
    }
    
   
  }
    });
      }

 constructor(){
  super()
  this.state ={
    display:'welcome',
  }
 }
 
 setDisplay=(newDisplay)=>{
this.setState({display:newDisplay});
 }
  
  render(){
    return (
      <div>
        <div className="overlay"></div>
        <section className="top-part">
          <video autoPlay loop>
            <source src={videoplayback} type="video/mp4" />
            <source src="./Assets/videos/video.ogg" type="video/ogg" />
            Your browser does not support the video tag.
            </video>
        </section>
  
        <section className="cd-hero">
        <div>
     
     <div className="cd-slider-nav">   
         <nav>
           <span className="cd-marker item-1"></span>
           <ul>
             <li><div className="image-icon" onClick={()=>this.setDisplay('welcome')}><img src={homeIcon }/></div><h6>Welcome</h6></li>
             <li><div className="image-icon" onClick={()=>this.setDisplay('about')}><img src={aboutIcon}/></div><h6>About Us</h6></li>
             <li><div className="image-icon" onClick={()=>this.setDisplay('featured')}><img src={featuredIcon}/></div><h6>Featured</h6></li>
             <li><div className="image-icon" onClick={()=>this.setDisplay('projects')}><img src={projectsIcon}/></div><h6>Projects</h6></li>
             <li><div className="image-icon" onClick={()=>this.setDisplay('contact')}><img src={contactIcon}/></div><h6>Contact Us</h6></li>
           </ul>
         </nav> 
       </div>
   
     </div>
         
     <ul className="cd-hero-slider">
         {
           this.state.display==='welcome'
           ?<Welcome/>
           :this.state.display==='about'
?<About/>
:this.state.display==='featured'
?   <li className="selected">
<div className="heading">
  <h1>Featured</h1>
  <span>We produce featured product every week</span> 
</div>
<div className="cd-half-width third-slide">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="content third-content">
          <div className="row">
            <div className="col-md-7 left-image">
              <img src={Featured}/>
            </div>
            <div className="col-md-5">
              <div className="right-feature-text">
                <h4>Featured Product: <em>Newline</em></h4>
                <p>Lorem ipsum dolor amet, consecte adipiscing elit, quisque dictum convallis mi. In dapibus auctor dictum donec mattis quis eros ultricies feugiat. Morbi congue faucibus mi, ague blandit curabitur ac lacinia.</p>
                <div className="feature-list">
                  <ul>
                    <p>- Suspendisse mattis finibus sem</p>
                    <p>- Pellentesque et urna vel lectus</p>
                    <p>- Vestibulum iaculis nisi dui</p>
                    <p>- Donec sagittis eros , ac tempus ligula</p>
                    <p>- Integer sapien risus, auctor</p>
                  </ul>
                </div>
                <div className="primary-button">
                  <a href="#">Discover More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>                  
  </div>
</div>
</li>
:this.state.display==='projects'
? <li className="selected">
<div className="heading">
  <h1>Our projects</h1>
  <span>Here you can check our recent projects</span> 
</div>
<div className="cd-half-width fourth-slide">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="content fourth-content">
          <div className="row">
            <div className="col-md-3 project-item">
              <img src={project1}/>
            </div>
            <div className="col-md-3 project-item">
              <img src={project2}/>
            </div>
            <div className="col-md-3 project-item">
             <img src={project3}/>
            </div>
            <div className="col-md-3 project-item">
              <img src={project4}/>
            </div>
         
          </div>
        </div>
      </div>
    </div>                  
  </div>
</div>
</li>
:this.state.display==='contact'
?    <li className="selected">
<div className="heading">
  <h1>Contact us</h1>
  <span>You'll be responded within 48 hrs</span> 
</div>
<div className="cd-half-width fivth-slide">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="content fivth-content">
          <div className="row">
            <div className="col-md-4">
              <div className="left-info">
                <p>Maecenas imperdiet sagittis lacus, ut consequat velit iaculis id. Praesent eu consequat urna. Morbi justo dolor, ornare sed lorem et, auctor iaculis ligula.
                <br></br>
                <em>3344 Donec mollis libero<br/>at metus luctus 10110</em>
                </p>
                <ul className="social-icons">
                  <i><a href="#"><i className="fa fa-facebook"></i></a></i>
                  <i><a href="#"><i className="fa fa-twitter"></i></a></i>
                  <i><a href="#"><i className="fa fa-linkedin"></i></a></i>
                  <i><a href="#"><i className="fa fa-rss"></i></a></i>
                  <i><a href="#"><i className="fa fa-behance"></i></a></i>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
             
            </div>
          </div>
        </div>
      </div>
    </div>                  
  </div>
</div>
</li>
:console.log()
         }
        
        
        
      
        
        
     </ul>

        </section>
     
      </div>
    );
  }
 
}

export default App;
