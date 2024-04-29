import Link from 'next/link'; 
import Image from 'next/image';
import { Navigation } from "swiper"; 
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AngleArrow from "@/src/svg/angle-arrow"; 

import about_img_1 from "@assets/img/about/icon-1.png";
import about_img_2 from "@assets/img/about/icon-2.png";
import about_img_3 from "@assets/img/about/icon-3.png";
import about_img_4 from "@assets/img/about/icon-4.png";
import about_img_5 from "@assets/img/about/icon-5.png";
import about_img_6 from "@assets/img/about/icon-6.png";
import about_img_7 from "@assets/img/about/icon-7.png";
import about_img_8 from "@assets/img/about/icon-8.png";
import about_img_9 from "@assets/img/about/icon-9.png";
import LineArrowTwo from '@/src/svg/line-arrow-2';
import shape_1 from "@assets/img/about/shape-1.png";
import about from "@assets/img/about/about-1.png";

const about_data = [
    {
        id:1,
        img: about_img_1,
        title: "Global Presence",
        description: <>Operating on a worldwide scale to serve clients internationally.</>,
    },
    {
        id:2,
        img: about_img_2,
        title: "Commercial Aircraft Parts",
        description: <>Providing high-quality parts for commercial aviation needs.</>,
    },
    {
        id:3,
        img: about_img_3,
        title: "Executive Aircraft Services",
        description: <>Offering specialized services catering to executive aircraft requirements.</>,
    },
    {
        id:4,
        img: about_img_4,
        title: "Aerospace Metals",
        description: <>Supplying top-grade metals crucial for aerospace applications.</>,
    },
    {
        id:5,
        img: about_img_8,
        title: "Defense Solutions",
        description: <>Providing solutions tailored to defense sector requirements.</>,
    },
    {
        id:6,
        img: about_img_5,
        title: "Marine Alloy Products",
        description: <>Offering marine alloy products for various marine applications.</>,
    }
    ,
    {
        id:7,
        img: about_img_6,
        title: "Equipment and Parts Supply",
        description: <>Ensuring a steady and reliable supply of equipment and parts.</>,
    },
    ,
    {
        id:8,
        img: about_img_9,
        title: "Repairs and Overhauls",
        description: <>Conducting expert repairs and overhauls for aviation equipment.</>,
    },
    ,
    {
        id:9,
        img: about_img_7,
        title: "Upgrades and Upgrades",
        description: <>Providing services to upgrade and  <br />modernize aviation equipment for<br /> enhanced performance and efficiency.</>,
    },
]

const setting = {
    slidesPerView: 3,
    spaceBetween: 82,  
    navigation: {
        nextEl: ".about-button-next-1",
        prevEl: ".about-button-prev-1",
    },
    breakpoints: {
        '1860': {
            
        },
        '1800': {
            spaceBetween: 40,
        },
        '1701': {
            
        },
        '1600': {
            
        },
        '1560': {
            
        },
        '1400': {
            spaceBetween:60,
        },
        '1200': {
            spaceBetween:30,
            slidesPerView: 2,
        },
        '992': {
            spaceBetween:60,
            slidesPerView: 2,
        },
        '767': {
            slidesPerView:2
        },
        '576': {
            slidesPerView:2
        },
        '0': {
            slidesPerView:1
        },
    },
}


const AboutArea = () => {
    const [isLoop, setIsLoop]  = useState(false)
    useEffect(()  => {
        setIsLoop(true)
    }, [])

    return (
        <>
            <section className="tp-about-area pb-45 box-plr p-relative">
            <div className="tp-about-shape d-none d-xl-block">
               <Image className="shape-1" src={shape_1} alt="theme-pure" />
            </div>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-xl-4 col-lg-12">
                     <div className="tp-about-wrapper-thumb text-center text-xl-start fadeLeft">
                        <Image src={about} alt="theme-pure" />
                     </div>
                  </div>
                  <div className="col-xl-8 col-lg-10">
                     <div className="tp-about-wrapper pl-50">

                        <div className="row">

                           <div className="col-lg-8">
                              <div className="tp-about-title-wrapper p-relative">
                                 <span className="tp-section-title__pre">
                                    our <span className="title-pre-color">best service</span>
                                    <AngleArrow /> 
                                 </span>
                                 <h3 className="tp-section-title">Global Aerospace Solutions
                                    <span className="title-left-shape">
                                    <LineArrowTwo /> 
                                    </span>
                                 </h3>
                              </div>
                           </div>

                           <div className="col-lg-4">
                              <div className="tp-about-nav d-none d-md-block p-relative">
                                 <button type="button" className="about-button-prev-1">
                                    <i className="fa-regular fa-arrow-left"></i>
                                 </button>
                                 <button type="button" className="about-button-next-1">
                                    <i className="fa-regular fa-arrow-right"></i>
                                 </button>
                              </div>
                           </div>
                        </div>

                        <div className="tp-about-item-wrapper"> 
                            <Swiper {...setting}  
                                    modules={[Navigation]} 
                                    loop={isLoop} 
                                    className="about-active swiper-container"
                                    >
                                {about_data.map((item, i)  =>  
                                    <SwiperSlide key={i} className="tp-about-item mb-30">
                                        <div className="tp-about-item-thumb">
                                            <Image src={item.img} alt="theme-pure" />
                                        </div>
                                        <div className="tp-about-item-content">
                                            <h4 className="about-title">{item.title}</h4>
                                            <p>{item.description}</p>
                                            <div className="tp-about-item-btn">
                                                <Link href="#">
                                                    <i className="fa-regular fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>  
                                )} 
                                </Swiper> 

                           <div className="tp-about-call">
                              <a href="tel:01310-069824">
                                 <p><i className="fa-solid fa-phone"></i> 
                                 Global aviation solutions for clienteles<span>+88 01310-069824</span></p>
                              </a>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        </> 
    );
};

export default AboutArea;