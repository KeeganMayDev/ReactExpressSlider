import React, { Component } from 'react';
import './rightie.css';


class Rightie extends Component{

// I think you were not passing down props properly that's why it wasn't working
    render(){  
        const { goToNextSlide } = this.props;

            return <div className="right-button-container" onClick={goToNextSlide}>
          <a class="btn"><span>Next</span></a>
        </div>
    }
}

export default Rightie;
