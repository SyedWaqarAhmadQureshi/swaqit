import { Link } from 'react-router-dom';
import ThemeSlider from '../../Sliders/ThemeSlider/ThemeSlider';
import partnerOneImage from '../../../assets/images/home/client-logo/1.png';
import partnerTwoImage from '../../../assets/images/home/client-logo/2.png';
import partnerThreeImage from '../../../assets/images/home/client-logo/3.png';
import partnerFourImage from '../../../assets/images/home/client-logo/4.png';
import partnerFiveImage from '../../../assets/images/home/client-logo/5.png';
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";


const partners = [
    {
        id: 1,
        image: partnerOneImage,
        link: '#'
    },
    {
        id: 2,
        image: partnerTwoImage,
        link: '#'
    },
    {
        id: 3,
        image: partnerThreeImage,
        link: '#'
    },
    {
        id: 4,
        image: partnerFourImage,
        link: '#'
    },
    {
        id: 5,
        image: partnerFiveImage,
        link: '#'
    },
    {
        id: 6,
        image: partnerOneImage,
        link: '#'
    },
    {
        id: 7,
        image: partnerTwoImage,
        link: '#'
    },
    {
        id: 8,
        image: partnerThreeImage,
        link: '#'
    },
    {
        id: 9,
        image: partnerFourImage,
        link: '#'
    },
    {
        id: 10,
        image: partnerFiveImage,
        link: '#'
    }
];

const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    centerMode: false,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },

    ]
};

const FooterOne = () => {
    return (
        <footer className="footer-01">

            {/* Partner Slider Section  */}
            {/* <ThemeSlider images={partners} classes="client-logo owl-carousel" settings={settings} /> */}

            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-border"></div>
                    </div>
                </div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <aside className="widget">
                            <h3 className="widget-title">US Address:</h3>
                            <ul>
                                <li><Link to="/" style={{cursor:'default'}}>
                                <IoLocationOutline />&nbsp;
                                30 N Gould St, Ste R <br/>
                                Sheridan, WY 82801
                                </Link></li>
                                <li><Link to="/" style={{cursor:'default'}}><LuPhone />&nbsp;+1 (646) 568-6003</Link></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <aside className="widget">
                            <h3 className="widget-title">India Address:</h3>
                            <ul>
                            <li><Link to="/" style={{cursor:'default'}}>
                                <IoLocationOutline />&nbsp;
                                Unit No. - 111, Aggarwal City Square, <br/>
                                Plot No. 10, District Centre Manglam Place,<br/>
                                Sector -3, Rohini, New Delhi - 110085
                                 </Link></li>
                                 <li>
                                    <Link to="/" style={{cursor:'default'}}><LuPhone />&nbsp;+91 194 4079733</Link></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <aside className="widget">
                            <h3 className="widget-title">Write Us:</h3>
                            <ul>
                            <li><Link to="/" style={{cursor:'default'}}>info@swaqit.com</Link></li>
                                <li><Link style={{cursor:'default'}} to="/">support@swaqit.com</Link></li>
                            </ul>
                        </aside>

                        {/* <aside className="widget">
                            <Link className="quomodo-btn" to="/">Get A Quote <i className="fa fa-long-arrow-right"></i></Link>
                        </aside> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright clearfix">
                            <ul>
                                <li className='text-white'>Connect with Us: &nbsp;<i/></li>
                                <li className='text-white'><a href="https://www.linkedin.com/company/swaq-it-consulting/" target='_blank'><i className="fa fa-linkedin"></i></a></li>
                                <li className='text-white'><a href="https://www.facebook.com/profile.php?id=61555817462707" target='_blank'><i className="fa fa-facebook-f"></i></a></li>
                                <li className='text-white'><a href="https://x.com/SwaqIt"><i className="fa fa-twitter" target='_blank'></i></a></li>
                                <li className='text-white'><a href="https://api.whatsapp.com/send?phone=16465686003" target='_blank'><i className="fa fa-whatsapp"></i></a></li>

                            </ul>
                            <p>© 2021 SWAQ IT CONSULTING </p>
                        </div>
                    </div>
                </div>
                {/* <!-- Copryright --> */}
            </div>
        </footer>
    );
};

export default FooterOne;