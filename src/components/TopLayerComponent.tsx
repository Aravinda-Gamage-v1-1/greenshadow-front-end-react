import {useLocation} from "react-router-dom";

export default function TopLayerComponent({toggleSidebar}) {
    const location = useLocation();
    const page = (pathName:string)=>{
        switch(pathName){
            case '/dashboard':
                return 'Dashboard';
            case '/field':
                return 'Field Management';
            case '/crop':
                return 'Crops Management';
            case '/staff':
                return 'Staff';
            case '/logs':
                return 'Monitoring Logs';
            case '/vehicles':
                return 'Vehicles';
            case '/equipment':
                return 'Equipment';
            default:
                return 'Dashboard';
        }
    }
    const title = page(location.pathname);

    return (
        <>
            <header>
                <div className="top-navbar d-md-none d-flex justify-content-between align-items-center">
                    <span className="menu-toggle" onClick={toggleSidebar}>
                        <i className="fas fa-bars fa-lg"></i>
                    </span>
                    <div className="profile-icon">
                        {/*<span id="nav-profile"> <i class="fa-solid fa-user"></i></span>*/}
                    </div>
                    <img src="src/assets/img/logo.jpg" alt="Logo" className="img-fluid"/>
                </div>
                <nav className="navbar navbar-light bg-light mb-4 custom-nav">
                    <span className="navbar-brand dashboard-topic">{title}</span>
                    <div className="profile-icon">
                        <span id="nav-profile"> <i className="fa-solid fa-user"></i></span>
                    </div>
                </nav>
            </header>
        </>
    )
}