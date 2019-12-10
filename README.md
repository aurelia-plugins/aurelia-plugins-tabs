# aurelia-plugins-tabs

A tabs plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-tabs --save
```

When using Aurelia CLI add the following dependency to `aurelia.json` as described in the [documentation](http://aurelia.io/docs/build-systems/aurelia-cli#adding-client-libraries-to-your-project):

```json
{
  "name": "aurelia-plugins-tabs",
  "path": "../node_modules/aurelia-plugins-tabs/dist/amd",
  "main": "aurelia-plugins-tabs"
}
```

Add `node_modules/babel-polyfill/dist/polyfill.min.js` to the prepend list in `aurelia.json`. Do not forgot to add `babel-polyfill` to the dependencies in `package.json`.

For projects using Webpack, please add `babel-polyfill` to your `webpack.config.js` as documented by [babeljs.io](https://babeljs.io/docs/usage/polyfill/#usage-in-node--browserify--webpack).

**JSPM**

```shell
jspm install aurelia-plugins-tabs
```

**Bower**

```shell
bower install aurelia-plugins-tabs
```

## Configuration

Inside of your `main.js` or `main.ts` file simply load the plugin inside of the configure method using `.plugin()`.

```javascript
import {PLATFORM} from 'aurelia-framework';

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin(PLATFORM.moduleName('aurelia-plugins-tabs'));

  await aurelia.start();
  aurelia.setRoot('app');
}
```

## Usage

This plugin is comprised of multiple components to be used together.

### Tabs

The tabs component is where your clickable tabs are generated. It has a required bindable attribute `tabs` and two optional attributes `class` and `translate`.

* The `tabs` attribute expects an array of one or more objects which contains at least an `id` property and a `label` property.
  * The `id` property is used to identify which pane this tab will open.
  * The `label` property is the value displayed.
  * The optional property `disabled` allows us to disable a certain tab.
  * The optional property `tooltip` shows a tooltip beside the specified tab. For more info see the [Bootstrap documentation](https://getbootstrap.com/docs/4.1/components/tooltips/).
* The `class` attribute is copied from the custom element to the inner `UL` element. Useful if you want to use something else than tabs, like pills or inline. For more info see the [Bootstrap documentation](https://getbootstrap.com/docs/4.1/components/navs/).
* If the `translate` attribute is set to `true` the value provided in `label` will be used as a translation key according to [`aurelia-i18n`](http://aurelia.io/docs/plugins/i18n). The `translate` attribute is `false` by default.

```html
<aup-tabs class="nav-tabs" tabs.bind="myTabs" active-tab-id.two-way="tabId" translate="true"></aup-tabs>
```

```javascript
export class App {
  constructor() {
    this.myTabs = [
      { id: 'tab1', label: 'tabs.tab1' },
      { id: 'tab2', label: 'tabs.tab2', disabled: true, tooltip: 'An explanation why it\'s disabled!' },
      { id: 'tab3', label: 'tabs.tab3' }
    ];
  }
}
```

When a tab is clicked, the event `aurelia-plugins:tabs:tab-clicked:{tab-id}` will be published, where `{tab-id}` is the corresponding id as defined in the `tabs` array. The payload is the click `event`.
The event `aurelia-plugins:tabs:active-tab-changed` to allow subscribing to a single event, with a payload containing the Ids of the tabs in the form: `{from: currentActiveId, to: targetId}`
The active-tag-id bound property will also be updated when the active tab is changed, but this happens after the above events have fired.

### Tab Content

Once you have your tabs setup, you will want to create your tab content which wraps tab panes.

```html
<aup-tab-content></aup-tab-content>
```

### Tab Pane

Inside the tab content, create a tab pane for each defined tab. A tab pane has a required value `tab` which matches the `id` of a tab in the tabs array.

```html
<aup-tab-pane tab="tab1">
  <h1>Tab 1</h1>
  <p>Lorem ipsum...</p>
</aup-tab-pane>
```

#### Composition

A tab pane can dynamically render a ViewModel by placing the [`compose`](http://aurelia.io/hub.html#/doc/article/aurelia/templating/latest/templating-basics/4) element inside it.

```html
<aup-tab-pane tab="tab1"><compose view="./helloWorld.html"></compose></aup-tab-pane>
```

### Full Example

```html
<aup-tabs class="nav-tabs" tabs.bind="myTabs" translate="true" active-tab-id.two-way="activeTabId"></aup-tabs>
<aup-tab-content>
  <aup-tab-pane tab="tab1">
    <h1>Tab 1</h1>
    <p>Lorem ipsum...</p>
  </aup-tab-pane>
  <aup-tab-pane tab="tab2"><compose view="./helloWorld.html"></compose></aup-tab-pane>
  <aup-tab-pane tab="tab3"><compose view-model="./helloWorld" model.bind="myModel"></compose></aup-tab-pane>
</aup-tab-content>
```

```javascript
export class App {
  constructor() {
    this.myModel = { target: 'Hello World' };
    this.activeTabId = 'tab1';
    this.myTabs = [
      { id: 'tab1', label: 'tabs.tab1' },
      { id: 'tab2', label: 'tabs.tab2', disabled: true, tooltip: 'An explanation why it\'s disabled!' },
      { id: 'tab3', label: 'tabs.tab3' }
    ];
  }
}
```

### Dynamic Tabs

You can generate tabs with a `repeat.for` property and bind the tab content to other modules like this:

```html
<aup-tabs class="nav-tabs" tabs.bind="myTabs" translate="true"></aup-tabs>
<aup-tab-content>
  <aup-tab-pane tab="${tab.id}" repeat.for="tab of myTabs">
    <compose view="${tab.view}"></compose>
  </aup-tab-pane>
</aup-tab-content>
```

```javascript
import {PLATFORM} from 'aurelia-framework';

export class App {
  constructor() {
    this.myTabs = [
      { id: 'tab1', label: 'tabs.tab1', view: PLATFORM.moduleName('tab1') },
      { id: 'tab2', label: 'tabs.tab2', view: PLATFORM.moduleName('tab2') }
    ];
  }
}
```