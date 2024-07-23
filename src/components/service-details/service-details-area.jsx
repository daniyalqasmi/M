import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from "@assets/img/services/service-details/img-1.jpg";
import service_video_thumb from "@assets/img/services/service-details/image.jpg";
import service_video_thumb2 from "@assets/img/services/service-details/img2.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import accordion from '@/src/data/accordion';

const service_details_content = {
   service_details_tab: [
      { id: 1, title: "Our Company", active: "active" },

   ],
   title: <>Our Story</>,
   description: <>M Capital LLC was founded in 1998 in Texas, USA, by a group of
      passionate aviation professionals who recognized the critical need
      for reliable, high-quality aircraft spare parts and maintenance
      services. From the outset, our founders were driven by a mission to
      enhance the safety, reliability, and efficiency of aircraft operations
      worldwide.

   </>,
   description_5: <>In the early days, the aviation industry was rapidly evolving, with
      increasing demand for both commercial and private aircraft. Our
      founders faced numerous challenges, from sourcing rare spare parts
      to establishing trust with potential clients. Despite these hurdles,
      their unwavering dedication and commitment to excellence set the
      foundation for what M Capital LLC would become.</>,
   title_1: <>Our Mission</>,

   title_2: <>Our Mission and Vision</>,

   description_2: <>Our mission is to provide unparalleled service and support to the
      aviation industry, ensuring the safety, reliability, and efficiency of
      aircraft operations. Our vision is to be the preferred global partner
      for aircraft parts and maintenance services, recognized for our
      excellence, innovation, and commitment to customer satisfaction.</>,

   title_3: <>Looking Ahead</>,

   description_3: <>As we look to the future, M Capital LLC remains committed to our
      core values of excellence, integrity, customer focus, innovation,
      and safety. We continue to expand our capabilities, forge new
      partnerships, and invest in the latest technologies to better serve
      our clients. Our goal is to keep aircraft in the air, safely and
      efficiently, for years to come</>,
   title_4: <>Philosophy</>,
   description_4: <>At M Capital LLC, our philosophy is centered around the belief that the
      aviation industry thrives on precision, trust, and continuous
      improvement. We understand the critical role that our services play in
      ensuring the safety and efficiency of aircraft operations. Therefore, our
      approach is built on several core principles:
   </>,
   title_5: <>Customer-Centric Approach: </>,
   description_6: <>We believe that our customers are our most
      valuable assets. Our success is directly tied to their satisfaction, which is
      why we go above and beyond to meet their needs. We listen actively,
      respond promptly, and provide personalized solutions that address
      specific requirements.
   </>,
   title_6: <>Commitment to Quality:</>,
   description_7: <>Quality is non-negotiable at M Capital LLC. From
      the sourcing of spare parts to the execution of repair and maintenance
      services, every step is governed by stringent quality control measures. We
      ensure that all parts and services meet or exceed industry standards and
      regulatory requirements.
   </>,
   title_7: <>Innovation and Adaptability:</>,
   description_8: <>The aviation industry is dynamic, with new
   challenges and advancements emerging regularly. We foster a culture of
   innovation and adaptability, encouraging our team to embrace new
   technologies and methodologies. This proactive approach enables us to
   stay ahead of industry trends and continuously enhance our service
   offerings.</>,
}
const { service_details_tab, title, description, title_1, title_2, title_3, title_4, title_5, title_6, title_7, description_2, description_3, description_4, description_5, description_6, description_7, feture_list, description_8, description_9 } = service_details_content

const ServiceDetailsArea = () => {
   //   const [isVideoOpen, setIsVideoOpen] = useState(false);
   const [isActive, setIsActive] = useState(1)

   return (
      <>
         <section className="tp-service-details-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4">
                     <div className="tp-service-widget">

                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-widget-tab">
                              <ul>
                                 {service_details_tab.map((item, i) =>
                                    <li key={i}>
                                       <Link className={item.active} href="/service-details">
                                          {item.title} <i className="fa-regular fa-arrow-right-long"></i>
                                       </Link>
                                    </li>
                                 )}
                              </ul>
                           </div>
                        </div>

                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-contact">
                              <div className="tp-service-contact-form">
                                 <ServiceContactForm />
                                 <p className="ajax-response"></p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="tp-service-details-wrapper">
                        <div className="tp-service-details-thumb">
                           <Image src={service_details_thumb} alt="theme-pure" />
                           <h1 className="tp-service-details-title-1">{title}</h1>
                           <p>{description}</p>
                           <p>{description_5}</p>
                        </div>
                        <div className="row">

                           <div className="tp-service-details-thumb p-relative">
                              <Image src={service_video_thumb} alt="theme-pure" />
                              {/* <div className="tp-video-play text-center">
                                    <a className="popup-video effect-1 effect-2" 
                                    onClick={() => setIsVideoOpen(true)}  
                                    ><i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                    </div> */}
                           </div>
                                    <h1 className="tp-service-details-title-1">{title_1}</h1>
                                    <br /><br />
                                    <br /><br />

                           
                              <div className="tp-service-details-list">
                                 <h2 className="tp-service-details-title">{title_2}</h2>
                                 <p>{description_2}</p>

                           </div>
                           <h2 className="tp-service-details-title">{title_3}</h2>
                           <p>{description_3}</p>
                        </div>

                        <Image src={service_video_thumb2} alt="theme-pure" />
                        <br /><br />
                        <h1 className="tp-service-details-title-1">{title_4}</h1>
                        <p>{description_4}</p>
                        
                        <h3 className="tp-service-details-title">{title_5}</h3>
                        <p>{description_6}</p>
                        <h3 className="tp-service-details-title">{title_6}</h3>
                        <p>{description_7}</p>
                        <h3 className="tp-service-details-title">{title_7}</h3>
                        <p>{description_8}</p>
                        <div className="tp-service-details-thumb p-relative">
                           {/* <div className="tp-video-play text-center">
                                    <a className="popup-video effect-1 effect-2" 
                                        onClick={() => setIsVideoOpen(true)}  
                                        ><i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                 </div> */}
                        </div>
                       
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* video modal start */}
         {/* <VideoPopup 
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"csnD5EVL5z8"}
            /> */}
         {/* video modal end */}
      </>
   );
};

export default ServiceDetailsArea;