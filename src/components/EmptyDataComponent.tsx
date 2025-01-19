const EmptyDataComponent = ({ message }) => {
    return (
        <div className="no-data">
            <img src="src/assets/img/noData.png" alt="No Data" className="no-data-img" />
            <p className="empty-message">{message}</p>
        </div>
    );
};

export default EmptyDataComponent;