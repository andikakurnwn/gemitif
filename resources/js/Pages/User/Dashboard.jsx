import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { IoSettings, IoPeople, IoDesktop, IoPieChart } from "react-icons/io5";
import Sidebar from '../../Components/layout/sidebar';


export default function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />
            {/* <div className="flex h-screen w-full">
                <div className="flex w-1/5 shadow-md">
                    <div className="flex flex-col w-full h-auto">
                        <div className="flex px-4 py-10 bg-gray-800 w-full shadow-md">
                            <span className="text-xl font-semibold text-white">
                                GEADMIN2
                            </span>
                            <span className="text-white mt-2 ml-2">
                                Area Administration
                            </span>
                        </div>
                        <div className="flex flex-col w-full h-auto">
                            <div className="">
                                <a
                                    href="#"
                                    className="text-sm text-gray-600 font-semibold flex items-center inline-flex w-full p-3 hover:bg-gray-200 cursor-pointer hover:shadow-sm"
                                >
                                    <span className="h-4 w-0.5 bg-gray-600 mx-1"></span>
                                    <IoPieChart size={16} />
                                    <span className="h-4 w-0.5 bg-gray-600 mx-1"></span>
                                    <span className="ml-2">Dashboard</span>
                                </a>
                            </div>
                            <hr />
                            <div className="">
                                <a
                                    href="#"
                                    className="text-sm text-gray-600 font-semibold flex items-center inline-flex w-full p-3 hover:bg-gray-200 cursor-pointer hover:shadow-sm"
                                >
                                    <span className="h-4 w-0.5 bg-gray-600 mx-1"></span>
                                    <IoDesktop size={16} />
                                    <span className="h-4 w-0.5 bg-gray-600 mx-1"></span>
                                    <span className="ml-2">CMS Gemitif</span>
                                </a>
                            </div>
                            <hr />
                            <div className="">
                                <a
                                    href="#"
                                    className="text-sm text-gray-600 font-semibold flex items-center inline-flex w-full p-3 hover:bg-gray-200 cursor-pointer hover:shadow-sm"
                                >
                                    <span className="h-4 w-0.5 bg-gray-600 mx-1"></span>
                                    <IoPeople size={16} />
                                    <span className="h-4 w-0.5 bg-gray-600 mx-1"></span>
                                    <span className="ml-2">Patner Gemitif</span>
                                </a>
                            </div>
                            <hr />
                            <div className="">
                                <a
                                    href="#"
                                    className="text-sm text-gray-600 font-semibold flex items-center inline-flex w-full p-3 hover:bg-gray-200 cursor-pointer hover:shadow-sm"
                                >
                                    <span className="h-4 w-0.5 bg-gray-600 mx-1"></span>
                                    <IoPeople size={16} />
                                    <span className="h-4 w-0.5 bg-gray-600 mx-1"></span>
                                    <span className="ml-2">Member Gemitif</span>
                                </a>
                            </div>
                            <hr />
                            <div className="">
                                <a
                                    href="#"
                                    className="text-sm text-gray-600 font-semibold flex items-center inline-flex w-full p-3 hover:bg-gray-200 cursor-pointer hover:shadow-sm"
                                >
                                    <span className="h-4 w-0.5 bg-gray-600 mx-1"></span>
                                    <IoSettings size={16} />
                                    <span className="h-4 w-0.5 bg-gray-600 mx-1"></span>
                                    <span className="ml-2">Pengaturan</span>
                                </a>
                            </div>
                            <hr />
                        </div>
                        <div className="flex mt-auto w-full bg-gray-800">
                            <span className="text-xs p-2 text-white">
                                Geadmin2 version 1.0.0 | Andika Kurniawan
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex w-4/5 bg-gray-200"></div>
            </div> */}
            <Sidebar page={
                (
                    <>
                        <div className="p-4">
                            <h1>Dashboard</h1>
                        </div>
                    </>
                )
            }/>
          
        </>
    );
}
