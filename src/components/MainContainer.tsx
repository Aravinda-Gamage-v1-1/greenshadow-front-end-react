import EmptyDataComponent from "./EmptyDataComponent.tsx";
import MainContainerProps from "../models/MainContainerProps.ts";


export default function MainContainer(props:MainContainerProps) {
    return (
        <>
            <div
                id={props.id}
                className={"item-container container"}
            >
                {props.dataArray.length === 0 ? (
                    <EmptyDataComponent message={props.noDataMessage} />
                ) : props.displayType === 'card' ? (
                    props.dataArray.map((item, index) => props.renderItem(item, index))
                ) : (
                    <div className="staff-table-container mb-4">
                        <table className="table staff-table">
                            <thead>
                            <tr>
                                {props.tableHeaders?.map((header,index) => (
                                    <th key={index}>
                                        {header}
                                    </th>
                                    ))}
                            </tr>
                            </thead>
                            <tbody>
                            {props.dataArray.map((item, index) => props.renderItem(item, index))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    )
}