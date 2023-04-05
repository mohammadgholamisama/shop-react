import React, { useContext } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './LastComments.css'
import CommentIcon from '@mui/icons-material/Comment';

import { shopContext } from '../../contexts/ShopContext';

export default function LastComments() {

    const uerCommentsContext = useContext(shopContext)

    return (
        <div className="main-last-comments">
            <div className="last-comments">
                <div className='last-comments__box px-1 px-sm-3 mt-4 mx-1 mt-xs-5 mx-xs-5'>
                    <Swiper className='h-100'
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
                    >
                        {uerCommentsContext.userComments.map(comment => (
                            <SwiperSlide key={comment.id}>
                                <div className="comment-box py-4" >
                                    <div className="row">
                                        <div className='col-1 pe-4'>
                                            <CommentIcon className='comment-icon' />
                                        </div>
                                        <span className="comment-text col-10">
                                            {comment.text}
                                        </span>
                                        <span className='username-comment my-3 col-11'>-- {comment.name} --</span>
                                        <div className="text-start offset-1 col my-3">
                                            <button className='site-btn'>Leave Us A Review</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
