import React, { useState } from 'react'
import {Carousel} from 'react-bootstrap'
import '../App.css';

const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="educ1.png"
              alt="First slide"
            />
         
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="educ2.jpg"
              alt="Second slide"
            />
    

          </Carousel.Item>
   
        </Carousel>
     
    
        </div>
      )
    }
    
  

export default Slider
