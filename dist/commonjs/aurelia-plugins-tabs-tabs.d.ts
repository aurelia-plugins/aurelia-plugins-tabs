export declare class Tabs {
    _element: any;
    _eventAggregator: any;
    class: string;
    tabs: any;
    translate: boolean;
    activeTabId: any;
    constructor(element: any, eventAggregator: any);
    attached(): void;
    tabsChanged(): void;
    click(tab: any, event: any): void;
    isActive(tab: any): boolean;
    /**
     * All tab contents *will* (shortly) be recreated and so need setTimeout as only when the elements are in the DOM
     * can we set their active state.
     */
    _refresh(): void;
    _setTabActiveState(newActiveId: any): void;
}
