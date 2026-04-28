"use client";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <section className="section-about padding-tb-50">
        <div className="container">
          <Row className="mb-minus-24">
            <Col lg={6} className="mb-24 col-12">
              <div className="bb-about-img">
                <img src="/assets/img/product/hero-cake.jpeg" alt="about-one" />
              </div>
            </Col>
            <Col lg={6} className="mb-24 col-12">
              <div className="bb-about-contact">
                <Fade
                  triggerOnce
                  direction="up"
                  duration={1000}
                  delay={200}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="section-title">
                    <div className="section-detail">
                      <h2 className="bb-title">
                        About <span>Beelicious Bites</span>
                      </h2>
                    </div>
                  </div>
                </Fade>
                <Fade triggerOnce direction="up" duration={1000} delay={400}>
                  <div className="about-inner-contact">
                    <h4>Just a Click, For a Taste</h4>
                    <p>
                      I am Blessing, the owner and baker behind{" "}
                      <span style={{ color: "#7b3f00" }}>Beelicious Bites</span>{" "}
                      here in Grand Rapids. I have always felt that the best
                      parts of life happen around good food. A warm loaf shared
                      with family, a slice of cake on a birthday, or just a
                      little treat to make an ordinary afternoon feel special.
                      Growing up,
                      {showMore && (
                        <>
                          {" "}
                          the kitchen was my favorite place. The smell of fresh
                          bread baking, buttery pastries coming out of the oven,
                          and cakes cooling on the counter always made
                          everything feel right. That love for baking stuck with
                          me, and after dreaming about it for years, I decided
                          to make it real with Beelicious Bites. We are a small,
                          cozy bakery in Grand Rapids where everything is made
                          fresh every day in small batches. We use only high
                          quality ingredients and put real care into every
                          recipe. Our signature cake breads, pastries, moist
                          cakes, cookies, and all kinds of sweet treats are
                          crafted with classic techniques and a bit of
                          creativity to keep things exciting. The goal is
                          simple: make food that tastes amazing and brings
                          people together. Whether you are stopping in for your
                          morning bread, picking up something sweet for
                          yourself, or ordering a custom cake for a celebration,
                          it means a lot to us to be part of your day. We love
                          seeing smiles when someone takes that first bite.
                          <br />
                          <br />
                          Thank you so much for supporting Beelicious Bites.
                          Come visit us in Grand Rapids, place an order, or just
                          say hi. We would be thrilled to meet you and help make
                          your next moment a little sweeter.
                          <br />
                          <br />
                          With lots of love and fresh baked goodness,
                          <br />
                          Blessing
                          <br />
                          Owner &amp; Baker
                          <br />
                          Beelicious Bites
                          <br />
                          <b>Grand Rapids, Michigan</b>
                        </>
                      )}
                    </p>

                    <button
                      onClick={() => setShowMore(!showMore)}
                      style={{
                        backgroundColor: "#ffa500",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "600",
                        padding: "2px",
                        color: "#efefef",
                        marginTop: "5px",
                      }}
                    >
                      {showMore ? "See Less" : "See More..."}
                    </button>
                  </div>
                </Fade>
                <Fade
                  triggerOnce
                  direction="up"
                  duration={1000}
                  delay={600}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <Row className="bb-vendor-rows row mb-minus-24">
                    <Col sm={4} className="mb-24">
                      <div className="bb-vendor-box">
                        <div className="bb-count">
                          <h5 className="counter">200 +</h5>
                        </div>
                        <div className="inner-text">
                          <p>vendors</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} className="mb-24">
                      <div className="bb-vendor-box">
                        <div className="bb-count">
                          <h5 className="counter">654k +</h5>
                        </div>
                        <div className="inner-text">
                          <p>Sales</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} className="mb-24">
                      <div className="bb-vendor-box">
                        <div className="bb-count">
                          <h5 className="counter">587k +</h5>
                        </div>
                        <div className="inner-text">
                          <p>Customers</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Fade>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
