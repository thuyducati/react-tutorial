import React, { Component } from 'react';
import logo from './logo.svg';
import Table from './Table'
import Form from './Form'
import { characters } from './data'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // characters: characters,
      characters: [],
      data: []
    }
  }

  componentDidMount() {
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*"

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result
        })
      })
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter(
        (item, i) => {
          return i !== index
        }
      )
    })
  }

  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }

  render() {
    const { characters, data } = this.state

    const result = data.map(
      (entry, index) => {
        return <li key={index}>{entry}</li>
      }
    )

    return (
      <div className="container">
        <h1>React Tutorial</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
        <h3>Fetch data in from API</h3>
        {
          result
        }
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
