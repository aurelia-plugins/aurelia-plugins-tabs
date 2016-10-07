import {inject} from 'aurelia-dependency-injection';
import {bindable,customElement} from 'aurelia-templating';
import {EventAggregator} from 'aurelia-event-aggregator';

// PUBLIC METHODS
export function configure(aurelia) {
  aurelia.globalResources('./aurelia-nav-tabs-tabs', './aurelia-nav-tabs-tab-content', './aurelia-nav-tabs-tab-pane');
}

// IMPORTS
// CLASS ATTRIBUTES
@customElement('tabs')
@inject(Element, EventAggregator)


// PUBLIC CLASS
export class Tabs {
  // PRIVATE PROPERTIES
  _element;
  _eventAggregator;

  // PUBLIC PROPERTIES
  @bindable tabs;

  // CONSTRUCTOR
  constructor(element, eventAggregator) {
    this._element = element;
    this._eventAggregator = eventAggregator;
  }

  // LIFECYCLE HANDLER
  attached() {
    var active = this.tabs.find(tab => tab.active);
    if (!active) return;
    document.querySelector('#' + active.id).classList.add('active');
  }

  // PUBLIC METHODS
  show(event) {
    event.stopPropagation();
    var target = event.target;
    var active = event.target.parentElement.parentElement.querySelector('a.nav-link.active');
    var targetHref = target.getAttribute('href');
    var activeHref = active.getAttribute('href');
    this._eventAggregator.publish('nav-tabs:clicked:' + targetHref.replace('#', ''), event);
    target.classList.add('active');
    active.classList.remove('active');
    document.querySelector(targetHref).classList.add('active');
    document.querySelector(activeHref).classList.remove('active');
  }
}

// IMPORTS
// CLASS ATTRIBUTES
@customElement('tab-pane')


// PUBLIC CLASS
export class TabPane {
  // PUBLIC PROPERTIES
  @bindable model;
  @bindable tab;
  @bindable viewModel;
}

// IMPORTS
// CLASS ATTRIBUTES
@customElement('tab-content')


// PUBLIC CLASS
export class TabContent {
}
