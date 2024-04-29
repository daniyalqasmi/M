import React, {useRef} from 'react';
import icon from "@assets/img/icon/icon-2.png";
import Image from 'next/image';
import Slider from "react-slick";

const slider_data = [
    {id: 1,  title: <>Global <span>Presence</span></>},
    {id: 2,  title: <>Commercial <span>Aircraft</span></>},
    {id: 3,  title: <>Executive <span>Aircraft</span></>},
    {id: 4,  title: <>Aerospace <span>Metals</span></>},
    {id: 5,  title: <>Defense <span>Solutions</span></>},
    {id: 6,  title: <>Marine <span>Alloy</span></>},
    {id: 7,  title: <>Equipment & <span>Parts Supply</span></>},
    {id: 8,  title: <>Repairs & <span>Overhauls</span></>},
    {id: 8,  title: <>Upgrades & <span>Upgrades</span></>},
]

const setting = {
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 100,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnFocus: false,
    pauseOnHover: true, 
  }

const SliderArea = () => {
    const sliderRef = useRef(null)
    return (
        <>
           <section className="tp-text-slider-area fix pt-100 pb-100">
            <div className="container-fluid gx-0">
              <div className="row gx-0">
               <div className="col-lg-10">
                  <div className="tp-text-slider">
                     <Slider {...setting} ref={sliderRef} className="tp-text-active">
                        {slider_data.map((item, i) => 
                            <div key={i} className="tp-text-item">
                                <div className="tp-text-slider-wrapper">
                                    <div className="tp-text-slider-item d-flex align-items-center">
                                        <Image src={icon} alt="theme-pure" />
                                        <h3 className="text-title">{item.title}</h3>
                                    </div>
                                </div>
                             </div>                        
                        )} 
                     </Slider>
                  </div>
               </div>
            </div>
            </div>
         </section> 
        </>
    );
};

export default SliderArea;