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
            case "creative":
                return (
                    <Swiper
                        effect={randomData.effect}
                        modules={[randomData.EffectCreative, Pagination, Navigation, Autoplay]}
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

    console.log(randomData)
    console.log(randomDelay)

    return (
        <>
            {/* Switch randomData */}
            {
                renderSwiper(randomDelay, (
                    <>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <Image
                                    src="/images/banner1.jpg"
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    className="w-full object-cover object-center"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/images/banner2.jpeg"
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className="w-full object-cover object-center"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide flex items-center">
                                <Image
                                    src="/images/banner3.jpeg"
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    className="w-full object-cover object-center"
                                />
                            </div>
                        </SwiperSlide>
                    </>
                )
            )}
        </>
    );
}

export default SwiperBanner;
