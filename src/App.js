import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';
import './css/index.css';

class App extends Component {
  state={
    noticias : []
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias =(categoria = 'general') =>{
    let categorias = categoria;
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categorias}&apiKey=3b1efc4a11e145dea7d946ed3340d99f`;

    fetch(url)
    .then(respuesta=>{
      return respuesta.json();
    })
    .then(noticias => {
      this.setState({
        noticias: noticias.articles
      })
    })
  }

  render() {
    return (
      <div className="contenedor-app">
       <Header titulo ="Noticias React"></Header>
       <div className="container white contenedor-noticias">
       <Formulario
        consultarNoticias={this.consultarNoticias}
       >
       </Formulario>
        <Noticias
          noticias = {this.state.noticias}
        >
        </Noticias>
       </div>
      </div>
    );
  }
}

export default App;
