import React from 'react';



class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/trips/1', { //returns a promise that we will eventually get data back
      method: 'GET'
    })
    .then(response => response.json()) //then turn the fetch response into a json file
    .then(data => console.log(data[0]))
  }

  render() {
    return (
      <div className="App">
        Hello world
      </div>
    );
  }
}

export default App;
