import React, { Component } from 'react';
import './slider.css';
import Leftie from '../arrows/leftie';
import Rightie from '../arrows/rightie';
import Slide from '../slide/slide';
import SlideDesc from '../slide/sliderdesc';

class Slider extends Component{

 
   
    constructor(props) {
        super(props)
    
        this.state = {
          images: [
            
          ],
          currentIndex: 0,
          translateValue: 0
        }
      }

    componentDidMount()
    {
        fetch('/api/images')
        .then(res => res.json())
        .then(images => this.setState({images}, () => console.log('images fetched.. ', images) ) );
    }
    
      goToPrevSlide = () => {
        if(this.state.currentIndex === 0) {
        
        return this.setState ({
            currentIndex: this.state.images.length - 1,
            translateValue: this.slideWidth() * -(this.state.images.length - 1)
          })
        }
        
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + this.slideWidth()
        }))
      }
    
      goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
          return this.setState({
            currentIndex: 0,
            translateValue: 0
          })
        }
        

        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -(this.slideWidth())
        }));
      }
    
      slideWidth = () => {
         return document.querySelector('.slide').clientWidth
      }

    render(){  
      const { images, currentIndex, translateValue } = this.state;
      const description = images && images.length > 0 ? images[currentIndex].desc : ''
        return (
            <div className="slider">
            <div className="slider-wrapper"
            style={{
              transform: `translateX(${translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
              {

                images.map((image, i) => (
                  <Slide key={i} image={image.key}/>

                ))
              }
              
          </div>

          <SlideDesc desc={description} />

                <Leftie goToPrevSlide={this.goToPrevSlide} />
                <Rightie goToNextSlide={this.goToNextSlide} />
            </div>
    );
    }
}

export default Slider;
