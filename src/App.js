import React from 'react';
import videoplayback from './Assets/videos/video.mp4';
import './Assets/css/bootstrap.min.css'
import './Assets/css/bootstrap-theme.min.css'
import './Assets/css/fontAwesome.css'
import './Assets/css/templatemo-style.css'
import $ from 'jquery';
import homeIcon from './Assets/img/home-icon.png';
import aboutIcon from './Assets/img/about-icon.png';
import featuredIcon from './Assets/img/featured-icon.png';
import projectsIcon from './Assets/img/projects-icon.png';
import contactIcon from './Assets/img/contact-icon.png';
import About1 from './Assets/img/left-about-image.jpg';
import About2 from './Assets/img/right-about-image.jpg';
import Featured from './Assets/img/left-feature-image.png';
import project1 from "./Assets/img/project-item-01.jpg";
import project2 from "./Assets/img/project-item-02.jpg";
import project3 from "./Assets/img/project-item-03.jpg";
import project4 from "./Assets/img/project-item-04.jpg";

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

  primaryNav.on('click', function(event){
    if($(event.target).is('.cd-primary-nav')) $(this).children('ul').toggleClass('is-visible');
  });

}
  
  //change visible slide
  sliderNav.on('click', 'li', function(event){
    event.preventDefault();
    var selectedItem = $(this);
    if(!selectedItem.hasClass('selected')) {
      // if it's not already selected
      var selectedPosition = selectedItem.index(),
        activePosition = slidesWrapper.find('li.selected').index();
      
      if( activePosition < selectedPosition) {
        nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, selectedPosition);
      } else {
        prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, selectedPosition);
      }

      //this is used for the autoplay
      visibleSlidePosition = selectedPosition;

      updateSliderNavigation(sliderNav, selectedPosition);
      updateNavigationMarker(navigationMarker, selectedPosition+1);
      //reset autoplay
      setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay);
    }
  });


function nextSlide(visibleSlide, container, pagination, n){
  visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    visibleSlide.removeClass('is-moving');
  });

  container.children('li').eq(n).addClass('selected from-right').prevAll().addClass('move-left');
  checkVideo(visibleSlide, container, n);
}

function prevSlide(visibleSlide, container, pagination, n){
  visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    visibleSlide.removeClass('is-moving');
  });

  container.children('li').eq(n).addClass('selected from-left').removeClass('move-left').nextAll().removeClass('move-left');
  checkVideo(visibleSlide, container, n);
}

function updateSliderNavigation(pagination, n) {
  var navigationDot = pagination.find('.selected');
  navigationDot.removeClass('selected');
  pagination.find('li').eq(n).addClass('selected');
}

function setAutoplay(wrapper, length, delay) {
  if(wrapper.hasClass('autoplay')) {
    clearInterval(autoPlayId);
    autoPlayId = window.setInterval(function(){autoplaySlider(length)}, delay);
    //console.log("here")
  }
}

function autoplaySlider(length) {
  if( visibleSlidePosition < length - 1) {
    nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, visibleSlidePosition + 1);
    visibleSlidePosition +=1;
  } else {
    prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, 0);
    visibleSlidePosition = 0;
  }
  updateNavigationMarker(navigationMarker, visibleSlidePosition+1);
  updateSliderNavigation(sliderNav, visibleSlidePosition);
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

function checkVideo(hiddenSlide, container, n) {
  //check if a video outside the viewport is playing - if yes, pause it
  var hiddenVideo = hiddenSlide.find('video');
  if( hiddenVideo.length > 0 ) hiddenVideo.get(0).pause();

  //check if the select slide contains a video element - if yes, play the video
  var visibleVideo = container.children('li').eq(n).find('video');
  if( visibleVideo.length > 0 ) visibleVideo.get(0).play();
}

function updateNavigationMarker(marker, n) {
  marker.removeClassPrefix('item').addClass('item-'+n);
}

$.fn.removeClassPrefix = function(prefix) {
  //remove all classes starting with 'prefix'
    this.each(function(i, el) {
        var classes = el.className.split(" ").filter(function(c) {
            return c.lastIndexOf(prefix, 0) !== 0;
        });
        el.className = $.trim(classes.join(" "));
    });
    return this;
};

});
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
             <li className="selected"><a href="#0"><div className="image-icon"><img src={homeIcon }/></div><h6>Welcome</h6></a></li>
             <li><a href="#0"><div className="image-icon"><img src={aboutIcon}/></div><h6>About Us</h6></a></li>
             <li><a href="#0"><div className="image-icon"><img src={featuredIcon}/></div><h6>Featured</h6></a></li>
             <li><a href="#0"><div className="image-icon"><img src={projectsIcon}/></div><h6>Projects</h6></a></li>
             <li><a href="#0"><div className="image-icon"><img src={contactIcon}/></div><h6>Contact Us</h6></a></li>
           </ul>
         </nav> 
       </div>
   
     </div>
         
     <ul className="cd-hero-slider">
         
         <li className="selected">
             <div className="heading">
                 <h1>NEWLINE</h1>
                 <span>Welcome To Web Design Agency</span>
             </div>
             <div className="cd-full-width first-slide">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-12">
                             <div className="content first-content">
                                 <h4>Let’s Talk More About Newline</h4>
                                 <p>Newline is free CSS template by templatemo. Credits go to <a href="https://videos.pexels.com/videos/busy-street-in-the-city-1089" target="_blank">Pexels.com</a> for a video background and <a href="http://unsplash.com" target="_blank">Unsplash</a> for images. Please tell your friends about templatemo and this is a way to help back. Thank you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum convallis mi. In dapibus auctor dictum donec mattis quis eros ultricies feugiat.</p>
                                 <div className="primary-button">
                                     <a href="#">Discover More</a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </li>

         <li>
           <div className="heading">
             <h1>About Us</h1>
             <span>Get More Info About Our Agency</span> 
           </div>
           <div className="cd-half-width second-slide">   
             <div className="container">
               <div className="row">
                 <div className="col-md-12">
                   <div className="content second-content">
                     <div className="row">
                       <div className="col-md-7 left-image">
                         <img src={About1}/>
                       </div>
                       <div className="col-md-5">
                         <div className="right-about-text">
                           <h4>Who we are?</h4>
                           <p>Fusce neque leo, dapibus sed imperdiet sed, vulputate sed purus. Nam eget justo in nibh facilisis rhoncus. Donec et risus non mauris lobortis convallis. Aliquam id urna quis ante blandit semper.</p>
                           <div className="primary-button">
                             <a href="#">Discover More</a>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="row">
                       <div className="col-md-7">
                         <div className="left-about-text">
                           <h4>What we do?</h4>
                           <p>Nam aliquam ultrices interdum. Vivamus metus mi, accumsan a tincidunt a, efficitur id felis. Vivamus non nibh malesuada, vestibulum nulla in, iaculis sem. Aenean tincidunt faucibus ipsum, ac aliquet nunc accumsan sed. Nulla sodales nunc sit amet libero egestas, ut interdum ex congue.</p>
                           <div className="primary-button">
                             <a href="#">Discover More</a>
                           </div>
                         </div>
                       </div>
                       <div className="col-md-5 right-image">
                         <img src={About2}/>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>                  
             </div>
           </div>
         </li>
        
         <li>
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

         <li>
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

            <li>
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
                            <div className="row">
                              {/* <form id="contact" action="" method="post">
                                <div className="col-md-6">
                                  <fieldset>
                                    <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required=""/>
                                  </fieldset>
                                </div>
                                <div className="col-md-6">
                                  <fieldset>
                                    <input name="email" type="email" className="form-control" id="email" placeholder="Email" required=""/>
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message" required=""></textarea>
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <button type="submit" id="form-submit" className="btn">Send Message</button>
                                  </fieldset>
                                </div>
                              </form> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>
            </li>

     </ul>

        </section>
     
      </div>
    );
  }
 
}

export default App;
