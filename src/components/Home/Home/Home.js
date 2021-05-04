import React from 'react';
import Appointment from '../Appointment/Appointment';
import ContactUs from '../ContactUs/ContactUs';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import OurBlog from '../OurBlog/OurBlog';
import OurDoctor from '../OurDoctor/OurDoctor';
import OurServices from '../OurServices/OurServices';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurServices></OurServices>
            <FeaturedService></FeaturedService>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <OurBlog></OurBlog>
            <OurDoctor></OurDoctor>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;