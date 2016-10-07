// IMPORTS
import {bindable, customElement} from 'aurelia-templating';


// CLASS ATTRIBUTES
@customElement('tab-pane')


// PUBLIC CLASS
export class TabPane {
  // PUBLIC PROPERTIES
  @bindable model;
  @bindable tab;
  @bindable viewModel;
}
