# aurelia-plugins-tabs

A tabs plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-tabs --save
```

**JSPM**

```shell
jspm install aurelia-plugins-tabs
```

**Bower**

```shell
bower install aurelia-plugins-tabs
```

## Configuration

Add to `package.json`

```json
  "aurelia": {
    "build": {
      "resources": [
        "aurelia-plugins-tabs"
      ]
    }
  }
```

Inside of your `main.js` or `main.ts` file simply load the plugin inside of the configure method using `.plugin()`.

```javascript
export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin('aurelia-plugins-tabs');

    await aurelia.start();
    aurelia.setRoot('app');
}
```

## Usage

This plugin is comprised of multiple components to be used together.

### Tabs

The tabs component is where your clickable tabs are generated. It has a required bindable value `tabs`.

The `tabs` value expects an array of one or more objects which contains at least an `id` property and a `label` property. The `id` property is used to identify which pane this tab will open. The `label` property is the value displayed. A third optional property `active` allows us to specify if this tab is the default active tab.

```html
<aup-tabs tabs.bind="myTabs"></aup-tabs>
```

```javascript
export class App {
  constructor() {
    this.myTabs = [
      { id: 'tab1', label: 'Tab 1', active: true },
      { id: 'tab2', label: 'Tab 2' },
      { id: 'tab3', label: 'Tab 3' }
    ];
  }
}
```

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

A tab pane can dynamically render a ViewModel using the [`compose`](http://aurelia.io/hub.html#/doc/article/aurelia/templating/latest/templating-basics/4) element.

```html
<aup-tab-pane tab="tab1" view-model="hello" model="{ target: 'World' }"></aup-tab-pane>
```

### Full Example

```html
<aup-tabs tabs.bind="myTabs"></aup-tabs>
<aup-tab-content>
  <aup-tab-pane tab="tab1">
    // your HTML content here
  </aup-tab-pane>
  <aup-tab-pane tab="tab2" view-model="helloWorld"></aup-tab-pane>
  <aup-tab-pane tab="tab3" view-model="hello" model="myModel"></aup-tab-pane>
</aup-tab-content>
```

```javascript
export class App {
  constructor() {
    this.myTabs = [
      { id: 'tab1', label: 'Tab 1', selected: true },
      { id: 'tab2', label: 'Tab 2' },
      { id: 'tab3', label: 'Tab 3' }
    ];
    this.myModel = { target: 'World' };
  }
}
```
