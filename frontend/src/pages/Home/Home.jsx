import React from 'react'
import "./Home.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '@mui/material';
import styled from "@emotion/styled"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function Home() {
    return (
        <>

            <div className='section1'>
                <h1>Welcome to Eatwell</h1>
                <h4>Come and eat well with our delicious & healthy foods.</h4>
                <button>Reservation</button>
            </div>
            {/* <div className='section2'>
                <div className='text'>
                    <h4>OUR STORY</h4>
                    <h2>Welcome</h2>
                    <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. <br /> <br />A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</span>
                    <button>Learn More About Us</button>
                </div>
                <div className='shefphoto'>
                   
                </div>
            </div> */}
            <section className='section2'>
                <div className="container">
                    <div className="row">
                        <div className="col-6 box">
                            <h2>OUR STORY</h2>
                            <h3>Welcome</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            <button>Read More</button>
                        </div>
                        <div className="col-6">
                            <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="Image" />
                        </div>
                    </div>
                </div>
            </section>


            <section className='section3'>
                <div className='sec3text'>
                    <div className='ouroffer'>
                    <p>O U R O F F E R S</p>
                    </div>
                <br />
                <div className='summer'>
                <h1>Our Offer This Summer</h1>
                </div>
                <br />
                <div className='away'>
                <span> Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts. </span>
                </div>
                     </div>
                     <Container>
                        <Swiper
                         slidesPerView={4}
                         spaceBetween={30}
                         pagination={{
                           clickable: true,
                         }}
                         modules={[Pagination]}
                         className="mySwiper"
                        >
                       <SwiperSlide>

                       </SwiperSlide>
                        </Swiper>
                     </Container>

            </section>
            
        </>
    )
}

export default Home