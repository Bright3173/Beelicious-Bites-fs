"use client";

import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";

/* ---------------- Component ---------------- */

const Testimonials: React.FC = () => {
  return (
    <section className="section-testimonials padding-tb-100 p-0-991">
      <div className="container">
        <Row>
          <div className="col-12">
            <Fade
              triggerOnce
              direction="up"
              duration={1000}
              delay={400}
              className="bb-testimonials"
            >
              {/* decorative images */}
              <img
                src="/assets/img/testimonials/img-1.png"
                alt=""
                className="testimonials-img-1"
              />
              <img
                src="/assets/img/product/coconut-flavor.jpeg"
                alt=""
                className="testimonials-img-2"
              />
              <img
                src="/assets/img/product/banana-flavor1b.jpeg"
                alt=""
                className="testimonials-img-3"
              />
              <img
                src="/assets/img/product/black-chocolate1b.jpeg"
                alt=""
                className="testimonials-img-4"
              />
              <img
                src="/assets/img/product/coconut-flavor.jpeg"
                alt=""
                className="testimonials-img-5"
              />
              <img
                src="/assets/img/product/bread1.jpg"
                alt=""
                className="testimonials-img-6"
              />

              <div className="inner-banner">
                <h4>From Our CEO</h4>
              </div>

              {/* Hardcoded Single CEO Testimonial */}
              <TestimonialCEO />
            </Fade>
          </div>
        </Row>
      </div>
    </section>
  );
};

/* ---------------- CEO Testimonial ---------------- */

const TestimonialCEO: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const shortText = `
I am Blessing, founder and CEO of Beelicious Bites, and what started as a lifelong
passion for the magic of fresh-baked bread and decadent cakes has grown into a
beloved bakery dedicated to bringing joy to every table.
  `;

  const fullText = `
I am Blessing, founder and CEO of Beelicious Bites, and what started as a lifelong
passion for the magic of fresh-baked bread and decadent cakes has grown into a
beloved bakery dedicated to bringing joy to every table. Inspired by childhood
memories of warm kitchens and the way a perfect loaf or slice can turn an ordinary
moment into something special, we bake daily in small batches using only the finest
ingredients and time-honored techniques with a touch of creativity. Every creation
—from our signature cake breads to custom celebration cakes—is made with care and
intention, because we believe great food is about connection, comfort, and celebration.
Thank you for trusting us to sweeten your days. I am honored to be part of your stories,
one delicious bite at a time.
  `;

  return (
    <div className="bb-testimonials-inner">
      <Row>
        {/* Image Column */}
        <Col md={4} className="d-none d-md-block col-12">
          <div className="testimonials-image">
            <img
              src="/assets/img/product/Blessing-ceo.png"
              alt="Blessing Okafor"
              className="rounded-full object-cover"
            />
          </div>
        </Col>

        {/* Content Column */}
        <Col className="col-12">
          <div style={{ margin: "0 6px" }} className="testimonials-contact">
            <div className="user flex items-center gap-3 mb-4">
              <img
                src="/assets/img/product/Blessing-ceo.png"
                alt="Blessing"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="detail">
                <h4 className="font-bold text-lg">Blessing Okafor</h4>
                <span className="text-gray-500 text-sm">Founder & CEO</span>
              </div>
            </div>

            <div className="inner-contact">
              <p>{isExpanded ? fullText : shortText}</p>

              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                className="mt-3 text-amber-600 hover:text-amber-800 font-medium transition-colors focus:outline-none"
              >
                {isExpanded ? "Show less" : "Show more..."}
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;
