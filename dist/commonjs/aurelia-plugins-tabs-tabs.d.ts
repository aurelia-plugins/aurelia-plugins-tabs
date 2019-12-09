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
    _refresh(): void;
    _addTabActiveClass(tabId: any): boolean;
    _updateActiveStatusInBoundTabs(activeId: any, targetId: any): void;
    _setTabActiveState(tabId: any, newActiveState: any): void;
    _findTab(targetId: any): any;
}
