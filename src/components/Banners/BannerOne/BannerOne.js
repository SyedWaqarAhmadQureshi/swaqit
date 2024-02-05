import { Link } from 'react-router-dom';
import heroShape from '../../../assets/images/home/hero-shape.png';
import heroBgImage from '../../../assets/images/home/hero.jpg';
import Video from '../../Video/Video';

const BannerOne = () => {
    return (
        <section className="hero-banner-01" style={{ backgroundImage: `url(${heroBgImage})` }} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-10">
                        <div className="banner-content">
                            {/* <div className="sub-heading">
                                One of the best consulting IT Firm
                        	</div> */}
                            <h1>Get Solutions</h1>
                            <p>
                                Welcome to SWAQ IT CONSULTING! We provide exceptional technology solutions to businesses and individuals worldwide.
                            </p>

                            <ul>
                                <li>
                                    {/* <Link className="quomodo-btn" to="/">Get Started Now <i className="fa fa-long-arrow-right"></i></Link> */}
                                </li>
                                <li>
                                    {/* <Video videoLink="LXb3EKWsInQ" title="Intro Video" /> */}
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Shape --> */}
            <div className="hero-shape"><img src={heroShape} alt="" /></div>

        </section>
    );
};

export default BannerOne;