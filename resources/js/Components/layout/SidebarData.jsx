import react from "react";
import { IoSettings, IoPeople, IoDesktop, IoPieChart } from "react-icons/io5";


export const SidebarData = [
    {
        title : 'Dashboard',
        path : '/dashboard',
        icon :  <IoPieChart size={16} />
    },
    {
        title : 'CMS Gemitif',
        path : '/cms',
        icon :  <IoDesktop size={16} />,
        iconClosed :  <IoPieChart size={16} />,
        iconOpenend :  <IoPieChart size={16} />,
        subNav : [
            {
                title : 'Overview',
                path : '/overview',
                icon :  <IoPieChart size={16} />
            }
        ]
    }
];