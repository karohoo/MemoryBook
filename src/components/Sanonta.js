import React from "react";

function Sanonta (props) {
    return (
        <p>
            Ikä: {props.sanonta.ika}<br/>
            Päivämäärä: {props.sanonta.paivamaara}<br/>
            Tilanne: {props.sanonta.tilanne}<br/>
            Sanonta: {props.sanonta.sanonta}<br/>
        </p>
    );
}

export default Sanonta;