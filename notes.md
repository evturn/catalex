### Lifecycle Hooks

#### `componentWillMount()`
##### Triggered once before any rendering.
One way to use it would be to load data asynchronously there and force rendering through `setState`.

#### `componentDidMount()`
#####Triggered after initial rendering.
You have access to the DOM here. You could use this hook to wrap a jQuery plugin within a component, for instance.

#### `componentWillReceiveProps(object nextProps)`
##### Triggers when the component receives new props.
You could, for instance, modify your component state based on the received props.

#### `shouldComponentUpdate(object nextProps, object nextState)`
##### Allows you to optimize the rendering.
If you check the props and state and see that there’s no need to update, return `false`.

#### `componentWillUpdate(object nextProps, object nextState)`
##### Gets triggered after `shouldComponentUpdate` and before `render()`.
It is not possible to use `setState` here, but you can set class properties, for instance. The official documentation goes into greater details. In short, this is where immutable data structures, such as Immutable.js, come handy thanks to their easy equality checks.

#### `componentDidUpdate()`
##### Triggered after rendering.
You can modify the DOM here. This can be useful for adapting other code to work with React.

#### `componentWillUnmount()`
##### Triggered just before a component is unmounted from the DOM.
This is the ideal place to perform cleanup (e.g., remove running timers, custom DOM elements, and so on).

### Properties/Methods (`React.createClass`)

#### `displayName`
It is preferable to set `displayName` as that will improve debug information. For ES6 classes this is derived automatically based on the class name.
#### `getInitialState()`
In class based approach the same can be achieved through `constructor`.
#### `getDefaultProps()`
In classes you can set these in `constructor`.
#### `mixins`
`mixins` contains an array of mixins to apply to components.