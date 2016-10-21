import {inject} from 'aurelia-dependency-injection';
import {bindable,customElement,containerless} from 'aurelia-templating';
import {EventAggregator} from 'aurelia-event-aggregator';

// PUBLIC METHODS
export function configure(aurelia) {
  aurelia.globalResources('./aurelia-plugins-tabs-tabs', './aurelia-plugins-tabs-tab-content', './aurelia-plugins-tabs-tab-pane');
}

// IMPORTS
// CLASS ATTRIBUTES
@customElement('aup-tabs')
@inject(Element, EventAggregator)


// PUBLIC CLASS
export class Tabs {
  // PRIVATE PROPERTIES
  _element;
  _eventAggregator;

  // BINDABLE PROPERTIES
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
    this._eventAggregator.publish('aurelia-plugins-tabs:tab-clicked:' + targetHref.replace('#', ''), event);
    target.classList.add('active');
    active.classList.remove('active');
    document.querySelector(targetHref).classList.add('active');
    document.querySelector(activeHref).classList.remove('active');
  }
}

// IMPORTS
// CLASS ATTRIBUTES
@containerless()
@customElement('aup-tab-pane')


// PUBLIC CLASS
export class TabPane {
  // BINDABLE PROPERTIES
  @bindable model;
  @bindable tab;
  @bindable viewModel;
}

// IMPORTS
// CLASS ATTRIBUTES
@customElement('aup-tab-content')


// PUBLIC CLASS
export class TabContent {
}
