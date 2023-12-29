import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import ServiceOne from '../components/Services/ServiceOne/ServiceOne';
import SkillOne from '../components/Skills/SkillOne/SkillOne';
import Testimonial from '../components/Testimonial/Testimonial';
import AboutOne from '../components/Abouts/AboutOne/AboutOne';

const About = () => {
    return (
        <>
            {/* Page Banner section  */}
            <BannerTwo pageTitle="About Us" title="About" />


            <AboutOne /> 

            {/*Skill Section  */}
            <SkillOne />

            {/* Service Section  */}
            {/* <ServiceOne /> */}

            {/* Testimonial Section  */}
            {/* <Testimonial /> */}

        </>
    );
};

export default About;