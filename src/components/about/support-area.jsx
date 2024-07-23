import VideoPopup from "@/src/modals/video-popup";
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowTwo from "@/src/svg/line-arrow-2";
import RightSymbol from "@/src/svg/right-symbol";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


import support_img_1 from "@assets/img/about/home-3/img-1.jpg";
import support_img_2 from "@assets/img/about/home-3/img-2.jpg";
import support_img_3 from "@assets/img/about/home-3/img-3.jpg";
import support_img_4 from "@assets/img/about/home-3/img-4.jpg";
import support_img_5 from "@assets/img/about/home-3/img-5.jpg";
import support_img_6 from "@assets/img/about/home-3/img-6.jpg";

const support_contact = {
   sub_title_1: "We’ve been stay",
   sub_title_2: " 38 years",
   info: <>Our company provides a full range of services for the <br /> Airline Industry.</>,
   title_1: "Repair and Maintenance Services",
   title_2: "Authorized MRO and OEM Collaboration:",
   description: "We work closely with authorized Maintenance Repair, and Overhaul providers and Original Equipment Manufacturers to deliver exceptional services.",
   title_3: "Expert Technicians:",
   description_2: "Our team includes highly trained technicians and engineers with extensive experience in aircraft maintenance.",
   title_4: "State-of-the-Art Facilities:",
   description_3: "Our facilities are equipped with the latest technology, allowing us to perform a wide range of maintenance and repair tasks.",
   title_5: "Modification and Upgrades",
   lists: [
      <>Avionics Upgrades</>,
      <>Interior Refurbishments</>,
      <>Performance Enhancements</>,
   ],
   title_6: "Specialized Services",
   lists_2: [
      <>Non-Destructive Testing (NDT)</>,
      <>Composite Material Repairs</>,
      <>Paint and Coating Services</>,
   ],


}
const { sub_title_1, sub_title_2,title_1,title_2,title_3,title_4,title_5,title_6,description,description_2,description_3,lists_2, info, lists } = support_contact

const SupportArea = () => {
   //   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="tp-support-breadcrumb fix pt-120 pb-210">
            <div className="container">
               <div className="row">
                  
                     <div className="tp-fun-fact-title-wrapper support-breadcrumb">
                        <span className="tp-section-title__pre">
                           Our <span className="title-pre-color">Services</span>
                           <AngleArrow />
                        </span>
                        <h3 className="tp-section-title">
                           {sub_title_1}
                           <span className="title-color">
                              {sub_title_2}
                           </span>
                           <span className="title-left-shape">
                              <LineArrowTwo />
                           </span>
                        </h3>
                        <p>{info}</p>
                           <Image src={support_img_1} alt="theme-pure" />
                        <h1 className="title-color">{title_1}</h1>
                           <Image src={support_img_2} alt="theme-pure" />
                        <h1 className="title-color">{title_2}</h1>
                        <p>{description}</p>
                        
                           <Image src={support_img_3} alt="theme-pure" />
                        <h1 className="title-color">{title_3}</h1>
                        <p>{description_2}</p>
                           <Image src={support_img_4} alt="theme-pure" />
                        <h1 className="title-color">{title_4}</h1>
                        <p>{description_3}</p>
                           <Image src={support_img_5} alt="theme-pure" />
                        <h1 className="title-color">{title_5}</h1>
                        <p>{lists}</p>
                           <Image src={support_img_6} alt="theme-pure" />
                        <h1 className="title-color">{title_6}</h1>
                        <p>{lists_2}</p>

                        <ul className="mb-65">
                           {lists.map((list, i) =>
                              <li key={i}> <span> <RightSymbol /></span> {list}</li>
                           )}
                        </ul>
                        <div className="tp-support-breadcrumb-btn mb-30">
                           <Link className="tp-btn" href="/service-details">Tell us How Can We Help</Link>
                        </div>
                     </div>
                  
                  {/* <div className="col-lg-6">
                     <div className="tp-about-3-img p-relative fadeRight">
                        <Image className="shape-1" src={support_img_2} alt="theme-pure" />
                        <div className="shape-2 p-relative">
                           <Image src={support_img_3} alt="theme-pure" />
                           {/* <div className="tp-video-play">
                           <a className="popup-video" 
                           onClick={() => setIsVideoOpen(true)} 
                           ><i className="fa-sharp fa-solid fa-play"></i></a>
                        </div> */}
                        {/* </div>
                        <Image className="shape-3" src={support_shape} alt="theme-pure" />
                     </div>
                  </div> */} 
               </div>
            </div>
         </section>

         {/* video modal start */}
         {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"dGcsHMXbSOA"}
      /> */}
         {/* video modal end */}
      </>
   )
}
export default SupportArea;