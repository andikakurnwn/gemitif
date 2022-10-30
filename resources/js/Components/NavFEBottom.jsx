import React from "react";
import { IoChevronUp } from "react-icons/io5";

export default function NavFEBottom({ games }) {
    return (
        <div className="w-full fixed bottom-0 inset-x-0 z-20">
            <div className="flex justify-between">
                <h4 className="font-semibold text-sm bg-white p-4 rounded-t-md">
                    Pilih Game yang Kamu{" "}
                    <span className="text-red-400">Suka</span>
                </h4>
                <button className="p-2 bg-white flex flex-col justify-center rounded-t-md items-center w-32 group hover:bg-gray-600">
                    <IoChevronUp
                        size={15}
                        className="mx-auto group-hover:text-white"
                    />
                    <span className="text-xs text-gray-400 group-hover:text-white">
                        Lihat Semuanya
                    </span>
                </button>
            </div>
            <div className="shadow-md rounded-md md:flex flex items-center justify-center bg-white border-t border-gray-200 md:px-10 px-7">
                <ul
                    className={`md:flex md:mt-0 m-4 md:items-center md:shadow-none shadow-md absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in py-2 mr-20`}
                >
                    {games.map((game) => (
                        <li
                            key="{game.name}"
                            className="text-md md:my-0 my-7 mx-2"
                        >
                            <a
                                href={game.link}
                                className="flex flex-col items-center justify-center w-32 h-10 hover:-translate-y-5 transform-all duration-200 cursor-pointer"
                            >
                                <img
                                    srcSet={game.image}
                                    alt={game.name}
                                    className="h-12 w-12 rounded-full shadow-md"
                                />
                                <span className="text-gray-800 hover:text-gray-400 duration-300 mt-2 text-xs">
                                    {game.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <div className="w-full flex text-center justify-center py-2 bg-white border-t border-gray-200">
                <span className="text-xs text-gray-900">
                    Gemitif | Tempat Jasa Joki Game Terpercaya &copy; 2022
                </span>
            </div> */}
        </div>
    );
}
