export default function (props){
    return (
        <div className="add-btn-container">
            <button
                id="add-field"
                type="button"
                className="btn add-filed"
                data-toggle="modal"
                data-target="#addFieldModal"
                onClick={props.onClick}
            >
                <i className="fas fa-plus-circle"></i>{props.text}
            </button>
        </div>
    )
}