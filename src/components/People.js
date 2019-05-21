import React from 'react';

class People extends React.Component {
  render() {
    return (
      <ul>
        {this.props.people.map((item, index) => 
        <li key={index}>
          {`${item.name.title} ${item.name.first} ${item.name.last}`}
        </li>)}
      </ul>
    );
  }
}

export default People;