
import React, { Component } from "react";
import Slider from "react-slick";
import './AppSlider.scss'
import stars from '../../assets/icons/stars.png'
import person from '../../assets/icons/person.png'
import person1 from '../../assets/icons/person1.png'
import person2 from '../../assets/icons/person2.png'
import dots from '../../assets/icons/dots.png'



  
export default class AppSlider extends Component {
    render() {
        var settings = {
          dots: false,
          slidesToShow: 3


        };
        return (
          <div className="slider__main">

            

            <div className="container">
            <div className="slider__main_promo">
           <span>Reviews</span> 
            </div>
            <div className="slider__main_text">
            They say <span>about us:</span>
            </div>


<Slider {...settings}>
    <div className="comments__tab">
    <div className="dots__img">
            <img src={dots} alt="dots" />
        </div>
    <div className="comments__tab_stars">
    <img src={stars} alt="stars" />
    </div>

    <div className="comments__tab_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </div>

    <div className="comments__tab_about">
        
        <div className="person__img">
        <img src={person} alt="person" />
        </div>
        <div className="comments__tab_about-text">
        <div className="comments__tab_about-name">
        <span>Matt Brown</span>
        <br />
        Company name
        </div>
        
        
    
        </div>
    </div>

    </div>


    <div className="comments__tab">
    <div className="dots__img">
            <img src={dots} alt="dots" />
        </div>
    <div className="comments__tab_stars">
    <img src={stars} alt="stars" />
    </div>

    <div className="comments__tab_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </div>

    <div className="comments__tab_about">
        
        <div className="person__img">
        <img src={person1} alt="person" />
        </div>
        <div className="comments__tab_about-text">
        <div className="comments__tab_about-name">
        <span>Robert Taylor</span>
        <br />
        Company name
        </div>
        
        
    
        </div>
    </div>

    </div>


    <div className="comments__tab">
    <div className="dots__img">
            <img src={dots} alt="dots" />
        </div>
    <div className="comments__tab_stars">
    <img src={stars} alt="stars" />
    </div>

    <div className="comments__tab_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </div>

    <div className="comments__tab_about">
        
        <div className="person__img">
        <img src={person2} alt="person" />
        </div>
        <div className="comments__tab_about-text">
        <div className="comments__tab_about-name">
        <span>Tom Wilson</span>
        <br />
        Company name
        </div>
        
        
    
        </div>
    </div>

    </div>
    <div className="comments__tab">
    <div className="dots__img">
            <img src={dots} alt="dots" />
        </div>
    <div className="comments__tab_stars">
    <img src={stars} alt="stars" />
    </div>

    <div className="comments__tab_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </div>

    <div className="comments__tab_about">
        
        <div className="person__img">
        <img src={person1} alt="person" />
        </div>
        <div className="comments__tab_about-text">
        <div className="comments__tab_about-name">
        <span>Robert Taylor</span>
        <br />
        Company name
        </div>
        
        
    
        </div>
    </div>

    </div>
</Slider>
</div>
          </div>
        );
      }
    }
