import React from "react";
import "./App.css";
import People from "./components/People";
import { fetchPeople } from "./service/PeopleFetch";
import ButtonFetch from './components/ButtonFetch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.handleButtonFetch = this.handleButtonFetch.bind(this);
  }

  handleButtonFetch() {
    fetchPeople().then(data => {
      this.setState({
        people: data.results
      });
    });
  }
  componentDidMount() {
    fetchPeople().then(data => {
      this.setState({
        people: data.results
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <People people={this.state.people} />
        <ButtonFetch handleButtonFetch={this.handleButtonFetch} />
      </React.Fragment>
    );
  }
}

export default App;
