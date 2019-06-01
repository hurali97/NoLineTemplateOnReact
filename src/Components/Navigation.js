import React from 'react';
import homeIcon from '../Assets/img/home-icon.png';
import aboutIcon from '../Assets/img/about-icon.png';
import featuredIcon from '../Assets/img/featured-icon.png';
import projectsIcon from '../Assets/img/projects-icon.png';
import contactIcon from '../Assets/img/contact-icon.png';


function Navigation() {
    return (
      <div>
     
          <div className="cd-slider-nav">   
              <nav>
                <span className="cd-marker item-1"></span>
                <ul>
                  <li className="selected"><a href="#0"><div class="image-icon"><img src={homeIcon }/></div><h6>Welcome</h6></a></li>
                  <li><a href="#0"><div className="image-icon"><img src={aboutIcon}/></div><h6>About Us</h6></a></li>
                  <li><a href="#0"><div className="image-icon"><img src={featuredIcon}/></div><h6>Featured</h6></a></li>
                  <li><a href="#0"><div className="image-icon"><img src={projectsIcon}/></div><h6>Projects</h6></a></li>
                  <li><a href="#0"><div className="image-icon"><img src={contactIcon}/></div><h6>Contact Us</h6></a></li>
                </ul>
              </nav> 
            </div>
        
          </div>
    );
  }
  
  export default Navigation;