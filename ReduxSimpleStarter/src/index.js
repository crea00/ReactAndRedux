import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC2IkW42YkS2GnY_Afat6dbebKdL3c0F-w';

// Create a new component. 
// This component should produce some HTML
class App extends Component{
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      // this.setState({ videos: videos });
      this.setState({ videos });
      console.log(videos);
    });
  }

  render() {
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
} 


// Take this component's HTML generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

/*
  Class based Component vs Functional based Component
  
  - Class based Components are used whenever we have a component that needs to be aware of state in some fashion.
    So, your data is changing over time, we're reacting to user events and we need to keep track of some aspect of state from render pass to render pass
  - Functional based Components are used whenever we're just taking in some information and spitting out some JSX.
    Also, very important to note a functional component can contain a class based component.

*/