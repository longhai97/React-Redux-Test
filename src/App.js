import React from 'react'
import Test from "./testredux";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isClose : true
    }
  }
  render() {
      return(
        <div>
          <Test/>
        </div>

    )
  }
}

export default App;
