// IMPORTS
import {inject} from 'aurelia-dependency-injection';
import {bindable, customElement} from 'aurelia-templating';
import {EventAggregator} from 'aurelia-event-aggregator';


// CLASS ATTRIBUTES
@customElement('aup-tabs')
@inject(Element, EventAggregator)


// PUBLIC CLASS
export default class Tabs {
  // PRIVATE PROPERTIES
  element;
  eventAggregator;

  // BINDABLE PROPERTIES
  @bindable class = 'nav-tabs';
  @bindable tabs;

  // CONSTRUCTOR
  constructor(element, eventAggregator) {
    this.element = element;
    this.eventAggregator = eventAggregator;
  }

  // LIFECYCLE HANDLER
  attached() {
    const active = this.tabs.find(tab => tab.active);
    if (!active) return;
    document.querySelector(`#${active.id}`).classList.add('active');
  }

  // PUBLIC METHODS
  click(event) {
    event.stopPropagation();
    const target = event.target;
    const active = this.element.querySelector('a.nav-link.active');
    if (target === active) return;
    const targetHref = target.getAttribute('href');
    const activeHref = active.getAttribute('href');
    target.classList.add('active');
    active.classList.remove('active');
    document.querySelector(targetHref).classList.add('active');
    document.querySelector(activeHref).classList.remove('active');
    this.eventAggregator.publish(`aurelia-plugins:tabs:tab-clicked:${targetHref.replace('#', '')}`, event);
  }
}