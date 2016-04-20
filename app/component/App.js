import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'foo' : 'bar' };
    }
    render() {
        return (<div class="app">foobar</div>);
    }
}
