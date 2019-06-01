import React from 'react';
import homeIcon from '../Assets/img/home-icon.png';
import aboutIcon from '../Assets/img/about-icon.png';
import featuredIcon from '../Assets/img/featured-icon.png';
import projectsIcon from '../Assets/img/projects-icon.png';
import contactIcon from '../Assets/img/contact-icon.png';


function Navigation() {
    return (
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
                            <img src="img/left-about-image.jpg"/>
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
                            <img src="img/right-about-image.jpg"/>
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
                            <img src="img/left-feature-image.png"/>
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

        </ul>
    );
}

export default Navigation;