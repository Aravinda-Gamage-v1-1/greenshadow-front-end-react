import {useState} from "react";
import {Outlet} from "react-router-dom";
import SideLayerComponent from "./SideLayerComponent";
import TopLayerComponent from "./TopLayerComponent.tsx";

export function MainLayout() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <section id="homeSection" className='homeSection'>
            <SideLayerComponent open={isSidebarOpen}  />
            <TopLayerComponent toggleSidebar={toggleSidebar} />
            <Outlet/>
        </section>
    )
}