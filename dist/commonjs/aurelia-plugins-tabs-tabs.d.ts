export declare class Tabs {
    _element: any;
    _eventAggregator: any;
    class: string;
    tabs: any;
    constructor(element: any, eventAggregator: any);
    attached(): void;
    tabsChanged(): void;
    click(event: any): void;
    _refreshActiveTab(): void;
}
