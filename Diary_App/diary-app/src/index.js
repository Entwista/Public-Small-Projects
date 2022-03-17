import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  handleClick () {
    var response = fetch('https://evr8batvm6.execute-api.ap-southeast-2.amazonaws.com/prod/diary-app-store-entry')
    .then(data => {
    return data.json();
    });
    console.log(response)
  }

  render(){
    return (
      <div>
        <h1>Diary App</h1>
        <form>
          
          <label for="date">Date:</label>
          <input type="date" id="date" name="date"></input>
        </form>
        <button onClick={() => this.handleClick()}>Upload Entry</button>
      </div>

    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

