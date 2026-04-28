"use client"
import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Row } from 'react-bootstrap'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const TopVendor = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleProductClick = (index: number) => {
        setSelectedIndex(index);
    };
    return (
        <section className="section-vendors padding-t-50 padding-b-100">
            <div className="container">
                <Tabs
                    selectedIndex={selectedIndex}
                    onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}>
                    <Row className="mb-minus-24">
                        <div className='col-12'>
                            <Fade triggerOnce direction='up' duration={1000} delay={200} className="section-title bb-center">
                                <div className="section-detail">
                                    <h2 className="bb-title">Combo <span>Sales</span> </h2>
                                    <p>Get <span style={{color:'orange'}}>25% Off</span> From Our Combo Deals  </p>
                                </div>
                            </Fade>
                        </div>
                        <Fade triggerOnce direction='up' duration={1000} delay={200} className="col-lg-5 col-12 mb-24">
                            <div className="bb-vendors-img">
                                <div className="tab-content">
                                    <TabPanel className={`tab-pane fade ${selectedIndex === 0 ? "show active" : ""}`} id="vendors_tab_one">
                                        <a onClick={(e) => e.preventDefault()} href="#" className="bb-vendor-init">
                                            <i className="ri-arrow-right-up-line"></i>
                                        </a>
                                         <img src="/assets/img/product/grouped-cake.jpeg" alt="combo deal" />
                                       
                                        
                                    </TabPanel>
                                    <TabPanel className={`tab-pane fade ${selectedIndex === 1 ? "show active" : ""}`} id="vendors_tab_two">
                                        <a onClick={(e) => e.preventDefault()} href="#" className="bb-vendor-init">
                                            <i className="ri-arrow-right-up-line"></i>
                                        </a>
                                        <img src="/assets/img/product/combo-deals1.jpeg" alt="Combo sales"/>
                                        
                                    </TabPanel>
                                    <TabPanel className={`tab-pane fade ${selectedIndex === 2 ? "show active" : ""}`} id="vendors_tab_three">
                                        <a onClick={(e) => e.preventDefault()} href="#" className="bb-vendor-init">
                                            <i className="ri-arrow-right-up-line"></i>
                                        </a>
                                          <img src="/assets/img/product/hero-cake.jpeg" alt="Combo sales"/>
                                        
                                    </TabPanel>
                                    
                                </div>
                            </div>
                        </Fade>
                        <div className="col-lg-7 col-12 mb-24">
                            <TabList className="bb-vendors-tab-nav ">
                                    <Tab style={{ outline: "none" }} className="nav-item" key={"vendors_tab_one"}>
                                        <Fade triggerOnce direction='up' duration={1000} delay={200}>
                                            <a className={`nav-link  ${selectedIndex == 0 ? "active" : ""}`} onClick={() => handleProductClick(0)} data-bs-toggle="tab" href="#vendors_tab_one">
                                                <div className="bb-vendors-box">
                                                    <div className="inner-heading">
                                                        <h5>8n1 Combo Blends</h5>
                                                        <span>Sales - 340+</span>
                                                    </div>
                                                    <p>Nut bread (2)  | Coconut(3) | Chocolaty(2) </p>
                                                </div>
                                            </a>
                                        </Fade>
                                    </Tab>
                                    
                                    <Tab style={{ outline: "none" }} className="nav-item" key={"vendors_tab_two"}>
                                        <Fade triggerOnce direction='up' duration={1000} delay={400}>
                                            <a className={`nav-link  ${selectedIndex == 1 ? "active" : ""}`} onClick={() => handleProductClick(1)} data-bs-toggle="tab" href="#vendors_tab_two">
                                                <div className="bb-vendors-box">
                                                    <div className="inner-heading">
                                                        <h5>4n1 Combo Blend</h5>
                                                        <span>Sales - 400+</span>
                                                    </div>
                                                    <p>Biscuit bread (2)  | Coconut | Chocolaty  </p>
                                                </div>
                                            </a>
                                        </Fade>
                                    </Tab>
                                    
                                    <Tab style={{ outline: "none" }} className="nav-item" key={"vendors_tab_three"}>
                                        <Fade triggerOnce direction='up' duration={1000} delay={600}>
                                            <a className={`nav-link  ${selectedIndex == 2 ? "active" : ""}`} onClick={() => handleProductClick(2)} data-bs-toggle="tab" href="#vendors_tab_three">
                                                <div className="bb-vendors-box">
                                                    <div className="inner-heading">
                                                        <h5>4n1 Combo Blend</h5>
                                                        <span>Sales - 1000+</span>
                                                    </div>
                                                    <p>Biscuit bread (2)  | Coconut | Chocolaty  </p>
                                                </div>
                                            </a>
                                        </Fade>
                                    </Tab>
                                    
                                    
                            </TabList>
                        </div>
                    </Row>
                </Tabs>
            </div>
        </section>
    )
}

export default TopVendor
