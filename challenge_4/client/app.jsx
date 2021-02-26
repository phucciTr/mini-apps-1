import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfRows: 4
    }
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Board boardSize={this.state.numberOfRows} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

