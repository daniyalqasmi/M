import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <div className="tp-contact-map-area">
                <div className="tp-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.9127331239!2d-95.60441762515244!3d29.63527773784217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e7a86f9b8d01%3A0x5be91f3cba70e5e2!2s12501%20Reed%20Rd%2C%20Sugar%20Land%2C%20TX%2077478%2C%20USA!5e0!3m2!1sen!2s!4v1721757993037!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" width="600" height="450"></iframe>
                </div>
            </div>
        </>
    );
};

export default GoogleMap;