import React, { Component } from "react";
import "../css/tyyli.css";

class Kokolomake extends Component {
    constructor(props) {
        super(props);
        this.state = {ika:"", paino:"", pituus:""};
    }
    
    muuta = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    tallenna = (e) => {
        e.preventDefault();
    }
    
    render() {
        return(
            <form>
                <h2 className="otsikkoTyyli">Pituus ja paino</h2>
                <label className="lomakeTyyli" htmlFor="ika">Ikä</label>
                <input type="text" name="ika" value={this.state.ika} onChange={this.muuta}/>
                <br />
                <label className="lomakeTyyli" htmlFor="paino">Paino (g)</label>
                <input type="text" name="paino" value={this.state.paino} onChange={this.muuta}/>
                <br />
                <label className="lomakeTyyli" htmlFor="pituus">Pituus (cm)</label>
                <input type="text" name="pituus" value={this.state.pituus} onChange={this.muuta}/>
                <br />
                <input type="button" value="Tallenna" onClick={this.tallenna} />
            </form>
        );
    }
}

export default Kokolomake;