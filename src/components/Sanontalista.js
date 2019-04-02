import React from "react";

function Sanontalista (props) {
    let sanontalista = props.sanonnat.map(function(sanonta, index) {
        return (
            <p key={index}>
                Ikä: {sanonta.ika}<br/>
                Päivämäärä: {sanonta.paivamaara}<br/>
                Tilanne: {sanonta.tilanne}<br/>
                Sanonta: {sanonta.sanonta}<br/>
            </p>);
        });
        return ( <div>{sanontalista}</div> );
}

export default Sanontalista;