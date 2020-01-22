import React, { Component } from 'react';
import './leftie.css';


class Leftie extends Component{
    // I think you were not passing down props properly that's why it wasn't working
    render(){  
        const {goToPrevSlide} = this.props;

            return   <div className="left-button-container" onClick={goToPrevSlide}>
            <a class="btn"><span>Prev</span></a>
          </div>
    }
}

export default Leftie;
