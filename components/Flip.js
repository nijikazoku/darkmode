import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

export default function Flip() {
  return (
    <div className="">
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect={"flip"}
        grabCursor={true}
        pagination={false}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://bet-channel.com/bet-channel.com/insert/sports/images/slider/wbc_nolose_pc_jp_20230301.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bet-channel.com/bet-channel.com/insert/sports/images/slider/k1_pc_ja_20230305.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bet-channel.com/bet-channel.com/insert/sports/images/slider/vip_pc_20220705.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
