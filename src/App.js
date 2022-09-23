import React, { Component } from "react";
import ReactDOM from "react-dom";
import TarjetaFruta from "./components/TarjetaFruta/TarjetaFruta";
import PropTypes from 'prop-types'
import "./global.css";

const noop = () => {

}
class Profile extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string,
    age: PropTypes.number
  }

  static defaultProps = {
    name: 'VWV',
    onHello: noop
  }
  saluda = () => {
    this.props.onHello()  
  }
  render() {
    const { name, bio, email } = this.props
    return(
      <div>
        <h1>{name}</h1>
        <p>{bio}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <button onClick={this.saluda}>Saluda</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return(
      <div>
        <Profile  bio='idk' email='vj@'></Profile>
      </div>
    )
  }
}
// class App extends Component {
//   render() {
//     return(
//       <div></div>
//     )
//   }
// }

// const App = () => {
//   return(
//     <div>
//       <h1></h1>
//     </div>
//   )
// }

export default App;

class PortalModal extends Component{
  render() 
  {
    if(!this.props.visible){
      return null
    }
    const styles = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      background: 'linear-gradient(to top right, #667eea, #764ba2)',
      opacity: '0.95',
      color: '#FFF'
    }
    return ReactDOM.createPortal((
      <div style={styles}>
        <h1>{this.props.children}</h1>
      </div>
    ), document.getElementById('modal-root'))
  }
}
const Computacion = () => (
 //React.Fragment equals <> 
 <React.Fragment>
    <li>
      Monitor
    </li>
    <li>
      Mouse
    </li>
  </React.Fragment>
)
const Ropa = () => (
  <React.Fragment>
    <li>
      Shorts
    </li>
    <li>
      Skirt
    </li>
  </React.Fragment>
)
const Title = (uiColor, children) => {
  const styles = {
    padding: "0.3em",
    color: "#FFF",
    background: uiColor,
    borderRadius: "0.3em",
    textAlign: "center",
    fontSize: "50px",
  };
  return <h1 style={styles}>{children}</h1>;
};
const Saludo = (props) => {
  return (
    <div>
      <div>{props.name && <strong>{props.name}</strong>}</div>
      {props.saluda ? <h1>Hey...</h1> : <p>No hay saludos</p>}
    </div>
  );

  // if(props.saluda){
  //   return (
  //     <h1>Hey...</h1>
  //   )
  // }
  // return (
  //   <p>No hay saludos</p>
  // )
};
class Hijo extends Component {
  manejadorClick = () => {
    this.props.onSaluda("Abc");
  };
  render() {
    return (
      <div className="box blue">
        <h2>Hijo</h2>
        <button
          onClick={() => {
            this.manejadorClick();
          }}
        >
          Saluda
        </button>
      </div>
    );
  }
}
class PersistenciaEventos extends Component {
  state = {
    color: "blue",
  };
  handlerChange = (e) => {
    //e.persist()
    const color = e.target.value;
    this.setState({
      color,
    });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handlerChange} />
        <h1
          style={{
            color: this.state.color,
          }}
        >
          {" "}
          {this.state.color}{" "}
        </h1>
      </div>
    );
  }
}
const Gato = (props) => {
  return (
    <div>
      <h1>Gato 🐱</h1>
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
  );
};
class Contador extends Component {
  state = {
    video: {
      title: "Super",
      likes: 0,
    },
  };

  add = () => {
    this.setState((state) => ({
      video: {
        ...state.video,
        likes: state.video.likes + 1,
      },
    }));
  };
  render() {
    return (
      <div>
        <h1>{this.state.video.title}</h1>
        <button onClick={this.add}>Likes: ({this.state.video.likes})</button>
      </div>
    );
  }
}
// class App extends Component {
//   state = {
//     visible: false,
//     num: 0
//   }
//   componentDidMount (){
//     setInterval(() => {
//       this.setState(state => ({
//         num: state.num + 1
//       }))
//     }, 1000)
//   }
//   mostrar = () => {
//     this.setState({
//       visible: true
//     })
//   }
//   cerrar = () => {
//     this.setState({
//       visible: false
//     })
//   }
//   render() {
//     return(
//       <div>
//         <button onClick={this.mostrar}>Mostrar</button>
//         <PortalModal visible={this.state.visible}>
//         <button onClick={this.cerrar}>Cerrar</button>
//           Hey, desde un portal { this.state.num}
//         </PortalModal>
        
//       </div>
//     )
//   }
// }
//class App extends Component {
//   state = {
//     uiColor: "tomato",
//   };
//   render() {
//     const { uiColor } = this.state
//     return (
//       <div>
//         <Title uiColor={uiColor}>
//           Super <em>Wow</em>
//         </Title>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   state= {
//    marcado: `<h1>Inyectando HTML<h1>
//               <br/>
//               <hr/>
//               <a href="#">Algún Link</a>`
//   }
//   render() {
//     return(
//       <div>
//       <div dangerouslySetInnerHTML={{
//         __html: this.state.marcado
//       }}>
//       </div>
//       </div>
//     )
//   }
// }
//const App = () => (
//   <div>
//     <Saludo saluda name="AVC"></Saludo>
//   </div>
// )
//class App extends Component {
//   state = {
//     name:''
//   }
//   manejador = (name) => {
//     this.setState({
//       name
//     })
//   };
//   render() {
//     return (
//       <div className="box red">
//         <Hijo onSaluda={this.manejador} />
//         <h1>Nombre: {this.state.name}</h1>
//       </div>
//     );
//   }
// }
// class App extends Component {
//   state = {
//     text: "",
//     evento: "",
//   };
//   manejador = (e) => {
//     this.setState({
//       text: e.target.value,
//       evento: e.type,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           onChange={this.manejador}
//           onCopy={this.manejador}
//           onPaste={this.manejador}
//         />
//         <h1>{this.state.text}</h1>
//         <h2>{this.state.evento}</h2>
//       </div>
//     );
//   }
// }

// const styles = {
//   height: "200px",
//   background: "gold",
//   padding: "1em",
//   boxSizing: "border-box",
// };
// class App extends Component {
//   state = {
//     x: 0,
//     y: 0,
//   };
//   manejador = (event) => {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY,
//     });
//   };
//   render() {
//     return (
//       <div style={styles} onMouseMove={this.manejador}>
//         <div>x: {this.state.x}</div>
//         <div>y: {this.state.y}</div>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   state = {
//     fuerza: 100,
//     vidas: 7
//   }
//   render() {
//     const otrosDatos = {
//       raza: 'tropical',
//       peleas: 300
//     }
//     return (
//       <div>
//         <Gato name= 'Garfield' age='2 años' {...otrosDatos} {...this.state}/>
//       </div>
//     );
//   }
// }
