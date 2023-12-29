import React from 'react';
import AboutOne from '../components/Abouts/AboutOne/AboutOne';
import BlogOne from '../components/Blogs/BlogOne/BlogOne';
import CallToActionOne from '../components/CallToActions/CallToActionOne/CallToActionOne';
import CallToActionTwo from '../components/CallToActions/CallToActionTwo/CallToActionTwo';
import FunFactOne from '../components/FunFacts/FunFactOne/FunFactOne';
import MoveTop from '../components/MoveTop/MoveTop';
import PortfolioOne from '../components/Portfolios/PortfolioOne/PortfolioOne';
import ServiceOne from '../components/Services/ServiceOne/ServiceOne';
import SkillOne from '../components/Skills/SkillOne/SkillOne';
import StrategyOne from '../components/Strategies/StrategyOne/StrategyOne';
import BannerOne from '../components/Banners/BannerOne/BannerOne';
import Message from '../components/Message/Message'

const Home = () => {
    return (
        <>

            {/* Banner Section */}
            <BannerOne />

            {/* Service Section  */}
            <ServiceOne />

            {/* About Section  */}
            <AboutOne />      

            {/* Call To Action Section  */}
            {/* <CallToActionOne /> */}

            {/*Skill Section  */}
            <SkillOne />
            
            {/*StrategyOne Section  */}
            <StrategyOne />
            <div style={{marginTop:'40px'}}>
                <h1 className="sec-title text-center kalam">
                     Know our CEO & Founder 
	            </h1>
            </div>
            <Message/>

            {/*Fun Facts Section  */}
            {/* <FunFactOne /> */}

            {/*Portfolio Section  */}
            {/* <PortfolioOne /> */}

            {/* Call To Action Two Section  */}
            <CallToActionTwo />

            {/* Blog Section  */}
            {/* <BlogOne /> */}

            {/* Move To Top  */}
            <MoveTop />
        </>
    );
};

export default Home;