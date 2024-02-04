import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {clients_list, client_tabs_list} from "../../assets/constants/clients"

const client_tabs = client_tabs_list;
const clients = clients_list;

const OurClient = () => {

    return (
        <section className="service-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="sub-title-2"><span>CURRENT & PAST CLIENT LIST</span></div>
                        <h3 className="sec-title">
                        We are industry agnostic and have worked with a wide range of Fortune 500
                        </h3>
                    </div>
                </div>
                <div className="row">
                    {/* <!-- Our Clients Start --> */}
                    
                    <Tabs id="clients_tab" className="mb-3 client-tabs">
                        {client_tabs?.map(client_tab => (
                            <Tab className="client-tab-logo"
                                key={client_tab?.pid}
                                eventKey={client_tab?.pid} 
                                title={client_tab?.title}>
                                <div className="client-grid-logo">
                                    {clients
                                        .filter(client => client_tab.id === client.category)
                                        .map(filteredClient => (
                                            <div key={filteredClient.id}>
                                                <img
                                                    src={filteredClient.icon}
                                                    loading="lazy"
                                                    width="100"
                                                    alt=""
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </Tab>
                        ))}
                    </Tabs>
                        
                    {/* <!-- Our Clients End --> */}
                </div>
            </div>
        </section>
    );
};

export default OurClient;
