import React, { useState, useContext, Fragment } from "react";
import { Link } from "@inertiajs/inertia-react";
import {
    IoGameControllerOutline,
    IoMenu,
    IoClose,
    IoPersonOutline,
    IoCubeOutline,
} from "react-icons/io5";

export default function NavFETop() {
    let Links = [{ name: "Download Aplikasi", route: "/" }];

    let [open, setOpen] = useState(false);

    return (
        <div className="w-full fixed top-0 inset-x-0 z-20">
            <div className="md:flex items-center justify-between bg-white p-4">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-semibold text-gray-800">
                    <span className="text-3xl text-gray-800 mr-1">
                        <IoGameControllerOutline />
                    </span>
                    GEMITIF
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
                >
                    {open ? <IoClose /> : <IoMenu />}
                </div>

                {/* <ul className={`md:flex md:mt-0 mt-6 md:items-center md:shadow-none shadow-md absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-10 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {
                        Links.map((link) => (
                            <li key="{link.name}" className="md:ml-8 text-sm md:my-0 my-7">
                                <a href="{link.route}" className="text-gray-800 hover:text-gray-400 duration-300">{link.name}</a>
                            </li>
                        ))
                    }
                </ul> */}

                <div
                    className={`md:flex md:mt-0 mt-6 md:items-center md:shadow-none shadow-md absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
                        open ? "top-10 opacity-100" : "top-[-490px]"
                    } md:opacity-100 opacity-0`}
                >
                    <a href="" className="flex items-center justify-center">
                        <IoPersonOutline
                            size={30}
                            className="rounded-full border-dotted border border-gray-900 p-1 mr-2"
                        />
                        <span className="text-xs font-semibold uppercase mt-1">
                            Masuk / Daftar
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
