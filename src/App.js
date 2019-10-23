import React, { Component } from 'react';
import Navbar from './componentes/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
//import datospersonas from '../src/datosPersonas.json'
import People from './componentes/people'

class App extends Component {

  state = {
    datospersonas: []
  }
  componentDidMount() {
    const url = `https://uinames.com/api/?amount=5&ext`;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(respuesta => this.setState({ datospersonas: respuesta }));

  }

  // DeleteCard(index) {
  //   this.setState({
  //     datospersonas: this.state.datospersonas.filter((e, i) => {
  //       return i !== index
  //     })
  //   });
  // }

  render() {
    return (
      <div className="container">
        <Navbar numeroTargetas={this.state.datospersonas.length} />
        <div className="card-columns">
          <People datos={this.state.datospersonas} />
        </div>
      </div>
    );
  }
}


export default App;
