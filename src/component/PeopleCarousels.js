import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from '../images/img4.jpeg'
import Image1 from '../images/img1.jpeg'
import Image2 from '../images/img2.jpeg'
import Image3 from '../images/img3.jpeg'

import { styled } from '@mui/material/styles';
import { Avatar, Typography, Box, Grid, Paper } from '@mui/material'

const imagelist = [
  {
    name: "Abdul",
    person_image: Image,
    desc: "Descripition"
  },
  {
    name: "Ravi",
    person_image: Image3,
    desc: "Descripition"
  },
  {
    name: "Mohit",
    person_image: Image2,
    desc: "THis is a brilliant person"
  },
  {
    name: "Mukul",
    person_image: Image1,
    desc: "THis is a brilliant person"
  },
  // {
  //   name: "Chucha",
  //   person_image: Image,
  //   desc: "THis is a brilliant person"
  // },
  // {
  //   name: "Pysco",
  //   person_image: Image2,
  //   desc: "THis is a brilliant person"
  // },
  // {
  //   name: "Pysco",
  //   person_image: Image,
  //   desc: "THis is a brilliant person"
  // }

]
export default function PeopleCarousels(props) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);


  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (<>
    {props.showDetails && (
      <div className="slider-container">
        <Slider
          asNavFor={nav1}
          ref={slider => (sliderRef2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          autoplay={true}
          autoplaySpeed={3000}
          arrows={false}
          centerMode={true}
          afterChange={(current, next) => setActiveSlide(current)}
        >
          {imagelist.map((manager, index) => (<div key={index + manager.name} >
            <Avatar sx={{ width: '15vw', height: "15vw", marginTop: '4px' }}
              alt={manager.name}
              src={manager.person_image}
              style={
                index == activeSlide ?
                  {
                    backgroundColor: 'gold', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', border: '5px solid gold', borderBottom: 0
                  } : {}}
            ></Avatar></div>))}
        </Slider >

        <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}
          arrows={false} focusOnSelect={true}
          pauseOnHover={true}
        >
          {imagelist.map((manager, index) => (<div key={index + manager.name} >
            <Grid container>
              <Grid item container align={'center'} justifyItems={'center'} spacing={2} sx={{ mt: 4, ml: 2, mr: 2, mb: 2 }}>
                {/* Image section */}
                <Grid item xs={12} md={5} >
                  <Avatar sx={{ width: '35vw', height: "35vw", borderRadius: '10px' }} variant='square' alt={manager.name} src={manager.person_image}></Avatar>
                </Grid>
                {/* Description section */}
                <Grid item xs={12} md={7} >
                  <Typography variant='h2'> {manager.name} </Typography>
                  <Typography variant='h6' sx={{ mt: 2 }}> {manager.desc} </Typography>
                </Grid>
              </Grid>
            </Grid>
          </div>))}
        </Slider>
      </div>)}

    {!props.showDetails && (
      <div className="slider-container">
        <Slider
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          autoplay={true}
          autoplaySpeed={2000}
          arrows={false}
          centerMode={true}
        // afterChange={(current, next) => setActiveSlide(current)}
        >
          {imagelist.map((manager, index) => (<div key={index + manager.name} >
            <Avatar sx={{ width: '15vw', height: "15vw", marginTop: '4px' }}
              alt={manager.name}
              src={manager.person_image}
              style={
                index == activeSlide ?
                  {
                    backgroundColor: 'gold', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', border: '5px solid gold', borderBottom: 0
                  } : {}}
            ></Avatar>
            <Grid container alignContent={'center'} alignItems={'center'} align={'center'} justifyItems={'center'}>
            <Typography style={{marginLeft:'4.5vw'}}>{manager.name}</Typography>
            </Grid>
            </div>))}
        </Slider >
      </div>)
    }</>
  );
}


