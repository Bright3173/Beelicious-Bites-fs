"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
// Optional: if you want autoplay
import "swiper/css/autoplay";

const HeroSlider = () => {
  return (
    <section className="section-hero margin-b-50">
      <div className="container">
        <div className="col-12">
          {/* Swiper React component */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Add modules you need
            spaceBetween={0}
            slidesPerView={1}
            loop={true} // Optional: infinite loop
            autoplay={{
              delay: 5000, // Optional: auto slide every 5s
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }} // Optional
            className="hero-slider"
          >
            {/* Slide 1 - your current hero content */}
            <SwiperSlide>
              <div className="mb-minus-24">
                <div className="col-12 order-lg-1 order-2 mb-24">
                  <div className="hero-contact">
                    <h1>
                      The Perfect Burst
                      <br />
                      Of Fresh Cake Bread.
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Example slide 3 */}
            <SwiperSlide>
              <div className="hero-contact">
                <h1>Deeply Refreshing Taste</h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Link href="/shop-left-sidebar-col-3" className="bb-btn-1">
        Order Now
      </Link>
    </section>
  );
};

export default HeroSlider;
