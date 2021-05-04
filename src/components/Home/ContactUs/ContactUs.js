import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <section className=" contact-bg">
            <div className="overlay">
                <div className="contact-header text-center">
                    <h4 className="my-text">Contact Us</h4>
                    <h1>Always connect with us</h1>
                </div>
                    <form className="form-group">
                        <div class="form-group d-flex justify-content-center">
                            <input type="email" class="form-control w-50 p-3 " id="email" placeholder="Email Address*" />
                        </div>
                        <div class="form-group d-flex justify-content-center mt-5">
                            <input type="text" class="form-control w-50 p-3 " id="subject" placeholder="Subject*" />
                        </div>
                        <div class="form-group d-flex justify-content-center mt-5">
                            <input style={{ padding: "60px 10px" }} type="text" class="form-control w-50" id="email" placeholder="your Message*" />
                        </div>
                        <div class="form-group d-flex justify-content-center mt-5">
                            <button className="btn btn-primary border-0">SUBMIT</button>
                        </div>
                    </form>
            </div>
        </section >
    );
};

export default ContactUs;