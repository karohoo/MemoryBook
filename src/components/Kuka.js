import React, { Component } from "react";
import "../css/tyyli.css";

class Kuka extends Component {
    constructor(props) {
        super(props);
        this.state = {nimi:""};
    }
    
    tallenna = (e) => {
        e.preventDefault();
    }
    
    render() {
        return(
            <form method="get" id="vaihdaLapsi"><select name="nimi">Valitse lapsi<option value="">Valitse lapsi</option>
            </select>
            </form>
        );
    }
}

export default Kuka;