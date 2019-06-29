import React from 'react';
import FeaturedImage from '../Assets/img/left-feature-image.png';

const Featured=()=>{
    return(
        <li className="selected animated fadeInRight">
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
              <img src={FeaturedImage}/>
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
    );
}

export default Featured;