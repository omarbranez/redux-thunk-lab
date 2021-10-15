//step 4

import React, { Component } from 'react';
import { connect } from 'react-redux' // import connect
import { fetchCats } from './actions/catActions' // import the fetchCats action creator
import CatList from "./CatList"

class App extends Component {   
  componentDidMount() {
    // console.log(this.props) // empty array on first two renders, then populated
    // catPics will always be empty on initial render
    // second render occurs on LOADING_CATS action dispatch, before we execute fetch request
    this.props.fetchCats()
  }
  
  render() {
    // console.log(this.props.catPics) // array is empty when app loads, for now. cats array (catPics) in initial state is empty.
    return (
      // <div className>
      <div className="App">
        <h1>CatBook</h1>
        {/* add CatList component here */}
        < CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading, //are we loading?
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

// export default App
// export default connect(mapStateToProps)(App) // connect App to the store's state
export default connect(mapStateToProps, mapDispatchToProps)(App) // allow us to call fetchCats inside the component
