import React from "react";
import { Link } from "@inertiajs/inertia-react";


const SubMenu = ({item}) => {

    return (
        <>
            <div className="">
                <a
                    href={item.path}
                    className="text-sm text-gray-600 font-semibold flex items-center inline-flex w-full p-3 hover:bg-gray-200 cursor-pointer hover:shadow-sm"
                >
                    <span className="h-4 w-0.5 bg-gray-600 mx-1"></span>
                    {item.icon}
                    <span className="h-4 w-0.5 bg-gray-600 mx-1"></span>
                    <span className="ml-2">{item.title}</span>
                </a>
            </div>
        </>
    );

};

export default SubMenu