import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">You spin me right round</h1>
		  <div className="lds-ring">
		  	<div /><div /><div /><div />
		  </div>
        </header>
      </div>
    );
  }
}

export default App;
