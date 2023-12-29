import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import MessageComponent from '../components/Message/Message'
import pageBanner from '../assets/images/page-banner.jpg';

function Message() {
  return (
    <>
    <BannerTwo pageTitle="Know Our CEO & Founder" title="CEO Message" />
	<div className="container" >
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-content">

                            {/* Breadcrumb section */}
                            {/* <Breadcrumb title={title} /> */}

                            {/* <h2>{pageTitle}</h2> */}
                        </div>
                    </div>
                </div>
            </div>
    <MessageComponent/>
    </>
  )
}

export default Message