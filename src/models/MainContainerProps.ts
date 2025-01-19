export default class MainContainerProps {
    dataArray: any[];
    renderItem: (item: any, index: number) => JSX.Element;
    noDataMessage: string;
    displayType: "card" | "table";
    tableHeaders?: string[];
    id?: string;

    constructor(dataArray: any[],renderItem: (item: any, index: number) => JSX.Element, noDataMessage: string,displayType: "card" | "table",tableHeaders?: string[], id? : string) {
        this.dataArray = dataArray;
        this.renderItem = renderItem;
        this.noDataMessage = noDataMessage;
        this.displayType = displayType;
        this.tableHeaders = tableHeaders;
        this.id = id;
    }
}