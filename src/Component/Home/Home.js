import React, { useState } from 'react';
import "./Home.css"
import { motion } from "framer-motion"
import {DataImg} from "./SwiperImg" 
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import "swiper/css/thumbs";

import {FreeMode , Navigation , Thumbs} from "swiper/modules";

const Home = ()=>{
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(
        <div className="home" dir="rtl">
                <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper : thumbsSwiper}}
                modules={[FreeMode,Navigation,Thumbs]}
                className="mySwiper2"
                >
                    {
                        DataImg.map((img)=>{
                            return(
                                <SwiperSlide key={img.id} style={{"background": `${img.bg}`}}  >
                                    <motion.img
                                    initial={{x:"10rem" ,opacity:0}}
                                    animate={{x:0, opacity:1}}
                                    transition={{duration:2, type:"spring"}}
                                    src={img.img} alt=""
                                    />
                                    <motion.div
                                    initial={{x:" -10rem" ,opacity:0}}
                                    animate={{x:0, opacity:1}}
                                    transition={{duration:2, type:"spring"}}
                                    style={{"color": `${img.color}`}}
                                    >
                                        <h1>اهلا بكم في موقع أذكار المسلم</h1>
                                        <p>يحتوي الموقع على مجموعة واسعة من الأذكار والأدعية التي تغطي مختلف جوانب حياة المسلم، بدءًا من الصباح وحتى الليل، ومن الصلاة والوضوء إلى الطعام والشراب وغيرها. إنه مصدر شامل ومتكامل للأذكار اليومية.</p>
                                        <a href="/" className="button">الاذكار</a>
                                    </motion.div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween = {10}
                slidesPerView = {5}
                freeMode ={true}
                watchSlidesProgress={true}
                modules={[FreeMode , Navigation, Thumbs]}
                className="mySwiper"
                >
                    {
                        DataImg.map((img)=>{
                            return(
                                <SwiperSlide key={img.id}>
                                <img  src={img.img} alt=""/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
    )
}

export default Home