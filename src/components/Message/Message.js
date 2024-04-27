import React from 'react'
import whitebg from '../../assets/images/home/author-New.jpeg'
function Message() {
  return (
    <>
    <section className="skills-section ">
            <div className="container">
			<br/>
                <div className="row">
					<div className="col-lg-6 col-md-6">
                        <div className="skill-thumb">
                            <div className="angle-top"></div>
                            <img src={whitebg} alt="" />
                            <div className="angle-bottom"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="skill-content">
                            <h3 className="sec-title text-center">
                            Syed Waqar Ahmad Qureshi  
	                        </h3>
							<hr/>
                            <p className="sec-desc text-justify" style={{marginBottom:'20px'}}> With over 20 years
							  of experience in the computer networking field, Syed holds a Master of
							   Science in Information Technology & Management and has multiple 
							   certifications. As a CCIE, he has extensive experience in IT
							    infrastructure support, training on Cisco technologies, 
								network management functions and security, and hardware 
								troubleshooting. Syed is proficient in designing and
								 implementing complex networks, maintaining, 
								 troubleshooting, and managing network users.
								  He has worked with a wide range of Fortune
								   500 multinational companies and managed more than 10K 
								   network nodes of leading companies globally. With his 
								   expertise in project management and service strategies, 
								   Syed ensures timely and efficient delivery of high-quality
								    services to clients.
							</p>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    </>
  )
}

export default Message