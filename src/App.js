import React, { Component } from "react";
import backGroundCrononometro from "./assets/cronometro.png";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "VAI",
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: "CONTINUAR" });
    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: (this.state.numero += 0.1) });
      }, 100);
      this.setState({ botao: "PAUSAR" });
    }
  }

  limpar() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({ numero: 0 });
    this.setState({ botao: "VAI" });
  }

  render() {
    return (
      <div className="container">
        <img src={backGroundCrononometro} alt="" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.vai}>
            {this.state.botao}
          </a>
          <a className="botao" onClick={this.limpar}>
            LIMPAR
          </a>
        </div>
      </div>
    );
  }
}

export default App;
