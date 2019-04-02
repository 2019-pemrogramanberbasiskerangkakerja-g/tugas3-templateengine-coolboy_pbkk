import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: []
    }
  }
  componentDidMount() {
    this.getName();
  }
  getList = () => {
    fetch('getName')
    .then(res => res.json())
    .then(name => this.setState({ name }))
  }

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <h1>Daftar Nama Kelompok</h1>
        {name.length ? (
          <div>
            {name.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;