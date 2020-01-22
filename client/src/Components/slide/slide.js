import React, { Component } from 'react';
import './slide.css';



class Slide extends Component{

    render(){  
    const { image } = this.props;
    
     const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  }
       
  return <div className="slide" style={styles}></div>
    }
}

        export default Slide;