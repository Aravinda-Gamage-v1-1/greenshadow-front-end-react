import "../style/dashboard.css";
import DashboardCardComponent from "../components/DashboardCardComponent.tsx";

export default function DashboardPage() {
    return (
        <>
            <section id="dashboard-section" className="main-content">
                {/*Content*/}
                <div className="">

                    {/*Dashboard Cards*/}
                    <div className="row dashboard-cards">
                        <DashboardCardComponent title='Tasks Completed' value={'34'}/>
                        <DashboardCardComponent title='Alerts' value={'8'}/>
                        <DashboardCardComponent title='Total Crops' value={'5'}/>
                        <DashboardCardComponent title='Staff' value={'55'}/>
                        <DashboardCardComponent title='Vehicle' value={'13'}/>
                        <DashboardCardComponent title='Equipment' value={'58'}/>
                    {/*    <div className="col-md-3">*/}
                    {/*        <div className="card glass-card text-white mb-4">*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title">Total Crops</h5>*/}
                    {/*                <p className="card-text">20</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-md-3">*/}
                    {/*        <div className="card glass-card text-white mb-4">*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title">Staff</h5>*/}
                    {/*                <p className="card-text">18 Active</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-md-3">*/}
                    {/*        <div className="card glass-card text-white mb-4">*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title">Tasks Completed</h5>*/}
                    {/*                <p className="card-text">145</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-md-3">*/}
                    {/*        <div className="card glass-card text-white mb-4">*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title">Alerts</h5>*/}
                    {/*                <p className="card-text">3 New</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    </div>

                    {/*Charts*/}
                    {/*<div className="row chart-cards">*/}
                    {/*    <div className="col-md-6">*/}
                    {/*        <div className="card mb-4">*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title">Crop Growth</h5>*/}
                    {/*                <div className="chart-container">*/}
                    {/*                    <canvas id="growthChart"></canvas>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-md-6">*/}
                    {/*        <div className="card mb-4">*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title">Yield Analytics</h5>*/}
                    {/*                <div className="chart-container">*/}
                    {/*                    <canvas id="yieldChart"></canvas>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>
        </>
    )
}