import React from 'react'
import { testimonials } from '../data/dummydata'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <><div className='testimonials hero'>
            <div className='container'>
                <Slider {...settings}>
                    {testimonials.map((item) => (
                        <div className='box'>
                            <i data-aos='zoom-out-up'>
                                <FormatQuoteIcon />
                            </i>
                            <p data-aos='zoom-out-down'>{item.text}</p>
                            <div className='img'  data-aos='zoom-out-right'>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <h3 ata-aos='zoom-out-left'>{item.name}</h3>
                            <label data-aos='zoom-out'>{item.post}</label>
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
        </>
    )
}

