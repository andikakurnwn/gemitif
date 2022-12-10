import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { IoSettings, IoPeople, IoDesktop, IoPieChart } from "react-icons/io5";
import Sidebar from '../../Components/layout/sidebar';


export default function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />
             <div className="p-4">
                <h1>TESTING</h1>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <Sidebar page={page} />