##### Overview
* Alter the `Store` through actions.
* This leads to a cascade causing `App` state to update through `setState`.
* In turn this will cause the component to render.

##### `AltContainer`
* The `AltContainer` wrapper simplifies the connection logic greatly.
* `AltContainer` allows us to bind data to its immediate children.
* `alt.dispatcher.register(console.log.bind(console))` in a store constructor would log all that goes through the alt instance.

#### `localStorage` overview
applies to app/libs/*

##### `storage.getItem(k)`
Returns the stored string value for the given key.

##### `storage.removeItem(k)`
Removes the data matching the key.

##### `storage.setItem(k, v)`
Stores the given value using the given key.

##### `storage.clear()`
Empties the storage contents.

See the state of the storages through the Resources tab.
Console tab allows you to perform direct operations on the data.
Use `storage.key` and `storage.key = 'value'` shorthands for quick modifications.

##### Implement a wrapper for `storage`
Expects strings.
Use `JSON.parse` and `JSON.stringify` for serialization.

```javascript
// return JSON.parse(localStorage.getItem(k));

// localStorage.setItem(k, JSON.stringify(v));
```