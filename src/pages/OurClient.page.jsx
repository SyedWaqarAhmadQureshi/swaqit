import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import OurClient from '../components/Client/OurClient';

const OurClients = () => {
    return (
        <>
            {/* Page Banner section  */}
            <BannerTwo pageTitle="Our Clients" title="Our Clients" />

            {/* Service Section  */}
            <OurClient />

        </>
    );
};

export default OurClients;