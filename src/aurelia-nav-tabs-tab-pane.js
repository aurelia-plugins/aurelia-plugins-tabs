// IMPORTS
import {bindable, containerless, customElement} from 'aurelia-templating';


// CLASS ATTRIBUTES
@containerless()
@customElement('tab-pane')


// PUBLIC CLASS
export class TabPane {
  // PUBLIC PROPERTIES
  @bindable model;
  @bindable tab;
  @bindable viewModel;
}
