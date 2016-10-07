import {
  inject
} from 'aurelia-dependency-injection';
import {
  bindable,
  customElement
} from 'aurelia-templating';
import {
  EventAggregator
} from 'aurelia-event-aggregator';

// PUBLIC METHODS
export declare function configure(aurelia?: any): any;

// PUBLIC CLASS

// IMPORTS
// CLASS ATTRIBUTES
export declare class Tabs {
  tabs: any;
  
  // CONSTRUCTOR
  constructor(element?: any, eventAggregator?: any);
  
  // LIFECYCLE HANDLER
  attached(): any;
  
  // PUBLIC METHODS
  show(event?: any): any;
}

// PUBLIC CLASS

// IMPORTS
// CLASS ATTRIBUTES
export declare class TabPane {
  model: any;
  tab: any;
  viewModel: any;
}

// PUBLIC CLASS

// IMPORTS
// CLASS ATTRIBUTES
export declare class TabContent {

}