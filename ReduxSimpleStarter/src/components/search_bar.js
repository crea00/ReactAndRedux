import React, { Component } from 'react';

class SearchBar extends Component {
  /*
    State is a plain javascript object that is used to record and react to user events.
    Each class based component that we define has its own state object.
    Whenever a component state is changed, the component immediately renders and also forces all of its children to render as well.
    Functional components do not have state, only class basic components do.

    All javascript classes have a special function called contructor.
    The constructor function is the first and only function called automatically whenever a new instance of the class is created.
    Constructor function is reserved for doing some set up inside of our class
    like initializing variables and initializing state and stuff like that.
  */

  constructor(props) {
    super(props);

    this.state ={ term: '' };
  } 

  render() {
    return <input onChange={event => console.log(event.target.value) } />;
  }
}

export default SearchBar;


