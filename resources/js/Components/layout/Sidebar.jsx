import React from "react";
import { Link } from "@inertiajs/inertia-react";
import SubMenu from './SubMenu';
import { SidebarData } from './SidebarData';

const Sidebar = ({page}) => {

    return (
        <>
            <div className="flex h-screen w-full">
                <div className="lg:w-1/5 md:w-1/5 lg:flex md:flex hidden shadow-md">
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
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} />;
                            })}
                            <hr />
                        </div>
                        <div className="flex mt-auto w-full bg-gray-800">
                            <span className="text-xs p-2 text-white">
                                Geadmin2 version 1.0.0 | Andika Kurniawan
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex lg:w-4/5 md:w-4/5 w-full bg-gray-200">
                    {page}
                </div>
            </div>
        </>
    );
};

export default Sidebar;