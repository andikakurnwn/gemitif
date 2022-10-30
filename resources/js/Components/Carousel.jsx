import React, { useEffect, useRef, useState } from "react";
import { IoChevronForwardCircle, IoChevronBackCircle } from "react-icons/io5";

export default function Carousel({ images }) {
    let count = 0;
    let carouselInterval;

    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselRef = useRef();

    const removeAnimation = () => {
        carouselRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        carouselRef.current.addEventListener("animationend", removeAnimation);
        carouselRef.current.addEventListener("mouseenter", pauseCarousel);
        carouselRef.current.addEventListener("mouseleave", startCarousel);

        startCarousel();

        return () => {
            pauseCarousel();
        };
    }, []);

    const startCarousel = () => {
        carouselInterval = setInterval(() => {
            handleNextClick();
        }, 5000);
    };

    const pauseCarousel = () => {
        clearInterval(carouselInterval);
    };

    const handleNextClick = () => {
        count = (currentIndex + count + 1) % images.length;
        setCurrentIndex(count);
        carouselRef.current.classList.add("fade-anim");
    };

    const handlePrevClick = () => {
        count = (currentIndex + images.length - 1) % images.length;
        setCurrentIndex(count);
        carouselRef.current.classList.add("fade-anim");
    };

    return (
        <div ref={carouselRef} className="w-full select-none relative">
            <div className="aspect-w-16 aspect-h-9">
                <img
                    srcSet={images[currentIndex]}
                    alt=""
                    className="w-full h-80 object-cover object-center"
                />
            </div>

            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between item-center">
                <button onClick={handlePrevClick}>
                    <IoChevronBackCircle
                        size={28}
                        className="text-gray-400 hover:text-gray-700 transform duration-200"
                    />
                </button>
                <button onClick={handleNextClick}>
                    <IoChevronForwardCircle
                        size={28}
                        className="text-gray-400 hover:text-gray-700 transform duration-200"
                    />
                </button>
            </div>
        </div>
    );
}
