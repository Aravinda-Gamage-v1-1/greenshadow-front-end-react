export default function DashboardCardComponent({title, value}) {
    return (
        <div className="col-md-3">
            <div className="card glass-card text-white mb-4">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{value}</p>
                </div>
            </div>
        </div>
    );
}