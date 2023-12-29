import { Link } from 'react-router-dom';
import callToActionImg from '../../../assets/images/home/cta-ball.png';

const CallToActionTwo = () => {
    return (
        <section className="cta-section-2">
            {/* <!-- Shape --> */}
            <div className="cta-shape-1"><img src={callToActionImg} alt="" /></div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="sub-title"><span className="border-left"></span>We Are With You</div>
                        <h3 className="sec-title">
                            Start Your Journey to Better Business
                        </h3>
                        {/* <div className='sec-title sec-title-amend'>
                        Overall, if you are looking for an experienced and reliable technology consulting firm that provides 
                        customised IT solutions at a reasonable cost then you have landed at the right place 😊
                        </div> */}
                    </div>
                    {/* <div className="col-lg-4 col-md-5">
                        <span className="quomodo-btn">business@swaqit.com</span>
                    </div> */}
                    
                    

                </div>
                
            </div>
            {/* <div className='sec-title sec-title-amend text-justify'>
                        Overall, if you are looking for an experienced and reliable technology consulting firm that provides 
                        customised IT solutions at a reasonable cost then you have landed at the right place 😊
                    </div> */}
            {/* <!-- Shape --> */}
            <div className="cta-shape-2"><img src={callToActionImg} alt="" /></div>

        </section>
    );
};

export default CallToActionTwo;