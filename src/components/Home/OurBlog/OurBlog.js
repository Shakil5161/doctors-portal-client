import React from 'react';
import './OurBlog.css';
import Quote from '../../../images/quote.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import Jack from '../../../images/jack.png';
import Ema from '../../../images//ema.png';
import OurBlogCard from '../OurBlogCard/OurBlogCard';
const OurBlog = () => {
    const ourBlogData = [
        { name: 'Dr.Caudi', date: '23 April 2019', img: Jack, title: '2 time of brush in a  day can keep you healthy', description: 'Some quick example text to build on the card title and make up the bulk of the card content.' },
        { name: 'Dr.Juli', date: '23 june 2019', img: Ema, title: 'the tooth cancer is a taking a challenge', description: 'Some quick example text to build on the card title and make up the bulk of the card content.' },
    ]
    return (
        <section className="container">
            <div className="row text-center blog-header">
                <h4 className="my-text">Our Blog</h4>
                <h1>From Our Blog News</h1>
            </div>
            <div className="row">
                <div class="col-md-4 g-2">
                    <div className="col-md-11 card color-card border-0 text-white">
                        <div class="card-body bg-img">
                            <img src={Quote} class="card-img" alt="..." />
                        </div>
                        <div class="card-img-overlay img-overlay-text">
                            <p class="card-text m-0">Rashed Kabir</p>
                            <small class="card-text">22 Aug 2018</small>
                            <h5 class="card-title pt-5">Check at least a doctor in a year for your teeth.</h5>
                            <FontAwesomeIcon style={{ fontSize: '50px', marginTop: '30px' }} icon={faLongArrowAltRight} />
                        </div>
                    </div>
                </div>

                {
                    ourBlogData.map(data => <OurBlogCard data={data}></OurBlogCard>)
                }

            </div>
        </section>
    );
};

export default OurBlog;