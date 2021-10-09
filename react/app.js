import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class Root extends Component {
  render() {
    return (
      <h1>Hello World from React</h1>
    )
  }
}
let container = document.getElementById('app');
let component = <Root />;
ReactDOM.render(component, container);