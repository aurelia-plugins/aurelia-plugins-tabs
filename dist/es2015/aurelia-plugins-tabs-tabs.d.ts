export declare class Tabs {
    _element: any;
    _eventAggregator: any;
    class: string;
    tabs: any;
    constructor(element: any, eventAggregator: any);
    attached(): void;
    tabsChanged(): void;
    click(tab: any, event: any): void;
    _refresh(): void;
}
