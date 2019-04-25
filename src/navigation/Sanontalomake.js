import React, { Component } from "react";
import "../css/tyyli.css";

class Sanontalomake extends Component {
    constructor(props) {
        super(props);
        this.state = {ika:"", paivamaara:"", tilanne:"", sanonta:""};
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
                <h2 className="otsikkoTyyli">Muistot talteen!</h2>
                <label className="lomakeTyyli" htmlFor="ika">Ikä</label>
                <input type="text" name="ika" value={this.state.ika} onChange={this.muuta}/>
                <br />
                <label className="lomakeTyyli" htmlFor="paivamaara">Päivämäärä</label>
                <input type="text" name="paivamaara" value={this.state.paivamaara} onChange={this.muuta}/>
                <br />
                <label className="lomakeTyyli" htmlFor="tilanne">Tilanne</label>
                <textarea name="tilanne" rows="3" cols="30"
                value={this.state.tilanne} onChange={this.muuta}/>
                <br />
                <label className="lomakeTyyli" htmlFor="sanonta">Sanonta</label>
                <textarea name="sanonta" rows="3" cols="30"
                value={this.state.sanonta} onChange={this.muuta}/>
                <br />
                <input type="button" value="Tallenna" onClick={this.tallenna} />
            </form>
        );
    }
}

export default Sanontalomake;