import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowFive from '@/src/svg/line-arrow-5';

import feature_img_1 from "@assets/img/feature/img-1.jpg";
import feature_img_2 from "@assets/img/feature/img-2.jpg";
import feature_img_3 from "@assets/img/feature/img-3.jpg";
import shape_1 from "@assets/img/feature/shape-1.png";
import shape_2 from "@assets/img/feature/shape-2.png";
import shape_3 from "@assets/img/feature/img-shape.png";


const feature_content = {
    feature_data: [
        {
            id: 1,
            img: feature_img_1,
            title: "Our mission",
            description: <>As far as we might be concerned <br /> making an extraordinary ad</>,
        },
        {
            id: 2,
            img: feature_img_2,
            title: "About History",
            description: <>To meet and exceed customer expectation <br />through an efficient and effective supply chain model.</>,
        },
        {
            id: 3,
            img: feature_img_3,
            title: "Our Partners",
            description: <>We at Transworld Aviation provide <br /> customized  technical solutions, parts distribution, Maintenance <br /> Repair and Overhaul</>,
        },
    ],

}
const { feature_data } = feature_content


const FeatureArea = ({ about }) => {
    return (
        <>
            <section className={`tp-feature-area ${about ? "feature-breadcrumb pb-100" : ""}`}>
                {about ? null :
                    <div className="tp-feature-shape">
                        <Image src={shape_1} alt="theme-pure" />
                    </div>
                }
                <div className="container container-large">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tp-feature-title-wrapper">
                                <span className="tp-section-title__pre">
                                    <span className="title-pre-color">About Us</span>
                                    <AngleArrow />
                                </span>
                                <h3 className="tp-section-title">We’ve Been Working For <span className="title-color">30 Years</span>
                                    <span className="title-right-shape">
                                        <LineArrowFive />
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-feature-wrapper p-relative">
                                <p>For a business to succeed globally, it must  grasp <br /> its core  objectives: serving, providing, fulfilling, and amazing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {feature_data.map((item, i) =>
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="tp-feature-item-box p-relative wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="tp-feature-item p-relative mb-30">
                                        <div className="tp-feature-item-shape">
                                            <Image src={shape_2} alt="theme-pure" />
                                        </div>
                                        <div className="tp-feature-item-wrapper">
                                            <div className="tp-feature-item-thumb">
                                                <div className="shape">
                                                    <Image src={shape_3} alt="theme-pure" />
                                                </div>
                                                <Image src={item.img} className="thumb" alt="theme-pure" />
                                            </div>
                                            <div className="tp-feature-item-content">
                                                <h3 className="feature-title">
                                                    <Link href="#">{item.title}</Link>
                                                    <span>
                                                        <AngleArrow />
                                                    </span>
                                                </h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-feature-item-btn">
                                        <Link href="#"><i className="fa-regular fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureArea;