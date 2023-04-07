import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './ProductBaner.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ProductBaner() {
    return (
        <div className='product-baner'>
            <Swiper className='h-100'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                loop
            >
                <SwiperSlide><img src="/images/productBaner.png" className='banner-img' alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/productBaner2.jpg" className='banner-img' alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/productBaner3.jpg" className='banner-img' alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}
