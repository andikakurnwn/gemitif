import React, { useRef } from "react";
import NavFETop from "@/Components/NavFETop";
import NavFEBottom from "@/Components/NavFEBottom";
import { Head } from "@inertiajs/inertia-react";
import {
    IoStar,
    IoFileTrayFullOutline,
    IoChevronForwardCircle,
    IoChevronBackCircle,
} from "react-icons/io5";
import Carousel from "@/Components/Carousel";

let games = [
    { name: "Mobile Lagend", image: "images/mobile-legend.png", route: "/" },
    { name: "Free Fire", image: "images/free-fire.png", route: "/games" },
    { name: "PUBG", image: "images/pubg.png", route: "/bantuan" },
    { name: "Point Blank", image: "images/point-blank.png", route: "/" },
];

let images = ["/images/one.jpg", "/images/two.jpg", "/images/three.jpg"];

export default function Welcome(props) {
    const promotionRev = useRef();
    const handleNextClick = () => {
        promotionRev.current.scrollLeft += promotionRev.current.offsetWidth;
        console.log(promotionRev.current.scrollLeft);
    };

    const handlePrevClick = () => {
        promotionRev.current.scrollLeft -= promotionRev.current.offsetWidth;
        console.log(promotionRev.current.scrollLeft);
        console.log(promotionRev.current.offsetWidth);
    };

    return (
        <>
            <Head title="GEMITIF | Tempat Jasa Joki Game Terpercaya" />

            <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900  ">
                <NavFETop />

                <div className="max-w-7xl md:mx-auto md:pt-[70px] pt-0 mx-4">
                    {/* Carousel */}

                    <Carousel images={images} />

                    {/* End Carousel */}

                    {/* Promotion */}

                    <div className="flex flex-col mt-6">
                        <div className="flex border-b-2 border-gray-100">
                            <h1 className="font-semibold text-md">
                                Promo Menarik Buat Kamu !
                            </h1>
                            <div className="flex ml-auto">
                                <button>
                                    <IoChevronBackCircle
                                        onClick={handlePrevClick}
                                        size={28}
                                        className="text-gray-400 hover:text-gray-700 transform duration-200"
                                    />
                                </button>
                                <button>
                                    <IoChevronForwardCircle
                                        onClick={handleNextClick}
                                        size={28}
                                        className="text-gray-400 hover:text-gray-700 transform duration-200"
                                    />
                                </button>
                            </div>
                        </div>
                        <div
                            className="flex w-full overflow-x-hidden transform-all duration-200 scroll-smooth"
                            ref={promotionRev}
                        >
                            <div className="flex gap-2 ">
                                <a
                                    href=""
                                    className="flex-shrink-0 flex-col shadow-md rounded-md bg-white cursor-pointer"
                                >
                                    <img
                                        src="images/promo-1.jpg"
                                        className="flex lg:w-full md:w-full w-[320px] h-40 object-center object-cover"
                                        alt=""
                                    />
                                </a>
                                <a
                                    href=""
                                    className="flex-shrink-0 flex-col shadow-md rounded-md bg-white cursor-pointer"
                                >
                                    <img
                                        src="images/promo-2.jpg"
                                        className="flex lg:w-full md:w-full w-[320px] h-40 object-center object-cover"
                                        alt=""
                                    />
                                </a>
                                <a
                                    href=""
                                    className="flex-shrink-0 flex-col shadow-md rounded-md bg-white cursor-pointer"
                                >
                                    <img
                                        src="images/promo-1.jpg"
                                        className="flex lg:w-full md:w-full w-[320px]l h-40 object-center object-cover"
                                        alt=""
                                    />
                                </a>
                                <a
                                    href=""
                                    className="flex-shrink-0 flex-col shadow-md rounded-md bg-white cursor-pointer"
                                >
                                    <img
                                        src="images/promo-2.jpg"
                                        className="flex lg:w-full md:w-full w-[320px] h-40 object-center object-cover"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* END Promotion */}

                    {/* Joki */}

                    <div className="flex flex-col mt-4">
                        <div className="flex  border-b-2 border-gray-100">
                            <h1 className="font-semibold text-md">
                                Pilih Penjoki Favoritmu !
                            </h1>
                        </div>
                        <div className="grid md:grid-cols-5 grid-cols-1 gap-4 mt-2">
                            <a
                                href=""
                                className="flex flex-col rounded-md group cursor-pointer hover:shadow-lg"
                            >
                                <div className="relative rounded-md bg-white">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/images/jasa-joki.jpg"
                                            className="w-full h-40 rounded-t-md group-hover:scale-125 transform-all duration-200 "
                                            alt=""
                                        />
                                        <div className="absolute top-0 right-0 ml-auto bg-white">
                                            <div className="flex m-1">
                                                <IoStar
                                                    size={15}
                                                    className="text-yellow-500 border-0 mr-1"
                                                />
                                                <span className="text-xs mt-1 text-gray-700 font-semibold">
                                                    5.0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex p-2 flex-col text-left ">
                                        <h2 className="text-sm">
                                            The Joki Gens
                                        </h2>
                                        <h4 className="flex mt-1">
                                            <IoFileTrayFullOutline
                                                size={15}
                                                className="mr-1"
                                            />
                                            <span className="text-xs">
                                                9 Atrian
                                            </span>
                                        </h4>
                                        <div className="flex mt-2">
                                            <div className="flex ml-auto">
                                                <img
                                                    src="images/pubg.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <img
                                                    src="images/mobile-legend.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <img
                                                    src="images/point-blank.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <span className="text-xs text-gray-900 font-semibold">
                                                    2+
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a
                                href=""
                                className="flex flex-col rounded-md group cursor-pointer hover:shadow-lg"
                            >
                                <div className="relative rounded-md bg-white">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/images/jasa-joki.jpg"
                                            className="w-full h-40 rounded-t-md group-hover:scale-125 transform-all duration-200 "
                                            alt=""
                                        />
                                        <div className="absolute top-0 right-0 ml-auto bg-white">
                                            <div className="flex m-1">
                                                <IoStar
                                                    size={15}
                                                    className="text-yellow-500 border-0 mr-1"
                                                />
                                                <span className="text-xs mt-1 text-gray-700 font-semibold">
                                                    5.0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex p-2 flex-col text-left ">
                                        <h2 className="text-sm">
                                            The Joki Gens
                                        </h2>
                                        <h4 className="flex mt-1">
                                            <IoFileTrayFullOutline
                                                size={15}
                                                className="mr-1"
                                            />
                                            <span className="text-xs">
                                                9 Atrian
                                            </span>
                                        </h4>
                                        <div className="flex mt-2">
                                            <div className="flex ml-auto">
                                                <img
                                                    src="images/pubg.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <img
                                                    src="images/mobile-legend.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <img
                                                    src="images/point-blank.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <span className="text-xs text-gray-900 font-semibold">
                                                    2+
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a
                                href=""
                                className="flex flex-col rounded-md group cursor-pointer hover:shadow-lg"
                            >
                                <div className="relative rounded-md bg-white">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/images/jasa-joki.jpg"
                                            className="w-full h-40 rounded-t-md group-hover:scale-125 transform-all duration-200 "
                                            alt=""
                                        />
                                        <div className="absolute top-0 right-0 ml-auto bg-white">
                                            <div className="flex m-1">
                                                <IoStar
                                                    size={15}
                                                    className="text-yellow-500 border-0 mr-1"
                                                />
                                                <span className="text-xs mt-1 text-gray-700 font-semibold">
                                                    5.0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex p-2 flex-col text-left ">
                                        <h2 className="text-sm">
                                            The Joki Gens
                                        </h2>
                                        <h4 className="flex mt-1">
                                            <IoFileTrayFullOutline
                                                size={15}
                                                className="mr-1"
                                            />
                                            <span className="text-xs">
                                                9 Atrian
                                            </span>
                                        </h4>
                                        <div className="flex mt-2">
                                            <div className="flex ml-auto">
                                                <img
                                                    src="images/pubg.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <img
                                                    src="images/mobile-legend.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <img
                                                    src="images/point-blank.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <span className="text-xs text-gray-900 font-semibold">
                                                    2+
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a
                                href=""
                                className="flex flex-col rounded-md group cursor-pointer hover:shadow-lg"
                            >
                                <div className="relative rounded-md bg-white">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/images/jasa-joki.jpg"
                                            className="w-full h-40 rounded-t-md group-hover:scale-125 transform-all duration-200 "
                                            alt=""
                                        />
                                        <div className="absolute top-0 right-0 ml-auto bg-white">
                                            <div className="flex m-1">
                                                <IoStar
                                                    size={15}
                                                    className="text-yellow-500 border-0 mr-1"
                                                />
                                                <span className="text-xs mt-1 text-gray-700 font-semibold">
                                                    5.0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex p-2 flex-col text-left ">
                                        <h2 className="text-sm">
                                            The Joki Gens
                                        </h2>
                                        <h4 className="flex mt-1">
                                            <IoFileTrayFullOutline
                                                size={15}
                                                className="mr-1"
                                            />
                                            <span className="text-xs">
                                                9 Atrian
                                            </span>
                                        </h4>
                                        <div className="flex mt-2">
                                            <div className="flex ml-auto">
                                                <img
                                                    src="images/pubg.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <img
                                                    src="images/mobile-legend.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <img
                                                    src="images/point-blank.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <span className="text-xs text-gray-900 font-semibold">
                                                    2+
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a
                                href=""
                                className="flex flex-col rounded-md group cursor-pointer hover:shadow-lg"
                            >
                                <div className="relative rounded-md bg-white">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/images/jasa-joki.jpg"
                                            className="w-full h-40 rounded-t-md group-hover:scale-125 transform-all duration-200 "
                                            alt=""
                                        />
                                        <div className="absolute top-0 right-0 ml-auto bg-white">
                                            <div className="flex m-1">
                                                <IoStar
                                                    size={15}
                                                    className="text-yellow-500 border-0 mr-1"
                                                />
                                                <span className="text-xs mt-1 text-gray-700 font-semibold">
                                                    5.0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex p-2 flex-col text-left ">
                                        <h2 className="text-sm">
                                            The Joki Gens
                                        </h2>
                                        <h4 className="flex mt-1">
                                            <IoFileTrayFullOutline
                                                size={15}
                                                className="mr-1"
                                            />
                                            <span className="text-xs">
                                                9 Atrian
                                            </span>
                                        </h4>
                                        <div className="flex mt-2">
                                            <div className="flex ml-auto">
                                                <img
                                                    src="images/pubg.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <img
                                                    src="images/mobile-legend.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <img
                                                    src="images/point-blank.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <span className="text-xs text-gray-900 font-semibold">
                                                    2+
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a
                                href=""
                                className="flex flex-col rounded-md group cursor-pointer hover:shadow-lg"
                            >
                                <div className="relative rounded-md bg-white">
                                    <div className="overflow-hidden">
                                        <img
                                            src="/images/jasa-joki.jpg"
                                            className="w-full h-40 rounded-t-md group-hover:scale-125 transform-all duration-200 "
                                            alt=""
                                        />
                                        <div className="absolute top-0 right-0 ml-auto bg-white">
                                            <div className="flex m-1">
                                                <IoStar
                                                    size={15}
                                                    className="text-yellow-500 border-0 mr-1"
                                                />
                                                <span className="text-xs mt-1 text-gray-700 font-semibold">
                                                    5.0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex p-2 flex-col text-left ">
                                        <h2 className="text-sm">
                                            The Joki Gens
                                        </h2>
                                        <h4 className="flex mt-1">
                                            <IoFileTrayFullOutline
                                                size={15}
                                                className="mr-1"
                                            />
                                            <span className="text-xs">
                                                9 Atrian
                                            </span>
                                        </h4>
                                        <div className="flex mt-2">
                                            <div className="flex ml-auto">
                                                <img
                                                    src="images/pubg.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <img
                                                    src="images/mobile-legend.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <img
                                                    src="images/point-blank.png"
                                                    className="h-4 w-4 rounded-full mr-1"
                                                    alt=""
                                                />
                                                <span className="text-xs text-gray-900 font-semibold">
                                                    2+
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* End Joki */}

                    <div className="h-40"></div>
                </div>

                {/* Footer */}

                <NavFEBottom games={games} />

                {/* End Footer */}
            </div>
        </>
    );
}
