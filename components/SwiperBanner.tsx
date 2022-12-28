// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
    Autoplay,
    Pagination,
    Navigation,
    EffectFade,
    EffectCards,
    EffectCoverflow,
    EffectCreative,
    EffectCube
} from "swiper";
import Image from "next/image";
import {useEffect, useState} from "react";
import {scalarOptions} from "yaml";
import Int = scalarOptions.Int;

const EffectSwiper = [
    {
        effect: "fade",
        EffectFade
    },
    {
        effect: "cards",
        EffectCards
    },
    {
        effect: "slide",
        SwiperSlide
    },
    {
        effect: "cards",
        EffectCards
    },
    {
        effect: "coverflow",
        EffectCoverflow
    },
    {
        effect: "creative",
        EffectCreative
    },
    {
        effect: "cube",
        EffectCube
    }
]

const getRandomObject = (array: string | any[]) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
};

const delayTime = [3000, 4000, 5000, 6000]
const getRandomDelay = (array: string | any[]) => {
    const randomDelay = array[Math.floor(Math.random() * array.length)];
    return randomDelay;
}
function SwiperBanner() {
    const [randomData, setRandomData] = useState(() => getRandomObject(EffectSwiper));
    const [randomDelay, setRandomDelay] = useState(() => getRandomDelay(delayTime));

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomData(getRandomObject(EffectSwiper));
            setRandomDelay(getRandomDelay(delayTime));
        }, randomDelay);
        return () => clearInterval(interval);
    }   , [randomDelay]);
    const renderSwiper = (randomDelay: number, child:any) => {
        switch (randomData.effect) {
            case "fade":
                return (
                    <Swiper
                        effect={randomData.effect}
                        modules={[randomData.EffectFade, Pagination, Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: randomDelay,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        className="w-full"
                    >
                        {child}
                    </Swiper>
                )
            case "cards":
                return (
                    <Swiper
                        effect={randomData.effect}
                        modules={[randomData.EffectCards, Pagination, Navigation, Autoplay]}
                        spaceBetween={0}
                        grabCursor={true}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: randomDelay,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        className="w-full"
                    >
                        {child}
                    </Swiper>
                )
            case "coverflow":
                return (
                    <Swiper
                        effect={randomData.effect}
                        modules={[randomData.EffectCoverflow, Pagination, Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={"auto"}
                        loop={true}
                        autoplay={{
                            delay: randomDelay,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        grabCursor={true}
                        centeredSlides={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        className="w-full"
                    >
                        {child}
                    </Swiper>
                )
            case "creative":
                return (
                    <Swiper
                        effect={randomData.effect}
                        modules={[randomData.EffectCreative, Pagination, Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        grabCursor={true}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ["100%", 0, 0],
                            },
                        }}
                        autoplay={{
                            delay: randomDelay,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        className="w-full"
                    >
                        {child}
                    </Swiper>
                )
            case "cube":
                return (
                    <Swiper
                        effect={randomData.effect}
                        modules={[randomData.EffectCube, Pagination, Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: randomDelay,
                            disableOnInteraction: false
                        }}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        className="w-full"
                    >
                        {child}
                    </Swiper>
                )
            default:
                return (
                    <Swiper
                        effect={"slide"}
                        modules={[SwiperSlide, Pagination, Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: randomDelay,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        className="w-full"
                    >
                        {child}
                    </Swiper>
                )
        }
    }

    const slide = [1, 2, 3];

    return (
        <>
            {/* Switch randomData */}
            {
                renderSwiper(randomDelay, (
                    <>
                        {/* Swiper Slide */}
                        {slide.map((item, index) => (
                            <SwiperSlide key={item}>
                                <div className="w-full">
                                    <Image
                                    src={`/images/${item}.png`}
                                    alt={`banner${item}`}
                                    width={500}
                                    height={500}
                                    className="w-full object-cover object-center"
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                        }
                    </>
                )
            )}
        </>
    );
}

export default SwiperBanner;
