import {Link} from "react-router-dom";
import '../style/dashboard.css'

export default function sideLayerComponent({open}){
    return (
        <aside>
            <nav className="sidebar  border-right d-md-block d-none">
                <div className="top-navbar d-md-none d-flex justify-content-between align-items-center">
        <span className="menu-toggle">
          <i className="fas fa-bars fa-lg"></i>
        </span>
                    <img src="src/assets/img/logo.jpg" alt="Green Shadow Logo" className="img-fluid"/>
                </div>
                <div className="sidebar-header p-3">
                    <img src="src/assets/img/logo.jpg" alt="Logo" className="img-fluid"/>
                </div>
                <ul className="list-unstyled p-2">
                    <li><Link to={'/dashboard'} className='side-bar-text'><span id="nav-dashboard"><i
                        className="fas fa-tachometer-alt"></i> Dashboard</span></Link>
                    </li>
                    <li><span id="nav-logs"><i className="fas fa-book-open"></i> Monitoring Logs</span></li>
                    <li><span id="nav-crop"><i className="fas fa-seedling"></i> Crops Management</span></li>
                    <li><Link to={'/field'}><span id="nav-field"><i className="fas fa-leaf"></i> Field Management</span></Link></li>
                    <li><span id="nav-staff"><i className="fas fa-users"></i> Staff</span></li>
                    <li><span id="nav-vehicles"><i className="fas fa-truck"></i> Vehicles</span></li>
                    <li><span id="nav-equipment"><i className="fas fa-tools"></i> Equipment</span></li>
                    <li><Link to={'/'}><span id="nav-log-out"><i
                        className="fa-solid fa-arrow-right-from-bracket"></i> Log out</span></Link></li>
                </ul>
            </nav>
        </aside>
    )
}