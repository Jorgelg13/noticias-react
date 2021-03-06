import React, { Component } from 'react';

class Formulario extends Component {

    categoriaRef = React.createRef();
    

    cambiarCategoria =(e) => {
        e.preventDefault();
        this.props.consultarNoticias(this.categoriaRef.current.value);
    }

    render() { 
        return ( 
            <div className="buscador row">
              <div className="col s12 m8  offset-m2">
               <form onSubmit={this.cambiarCategoria}>
                  <h2>Noticias por categoria</h2>
                  <div className="input-field col s12 m8">
                    <select ref={this.categoriaRef}>
                        <option value="general" defaultValue >General</option>
                        <option value="science">Ciencia</option>
                        <option value="sports">Deportes</option>
                        <option value="technology">Tecnologia</option>
                        <option value="entertainment">Entretenimiento</option>
                    </select>
                  </div>
                  <div className="input-field col s12 m4 enviar">
                    <input type="submit" className="btn amber darken-2" value="buscar"/>
                  </div>
               </form>
              </div>  
            </div>
         );
    }
}
 
export default Formulario;