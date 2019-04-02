import React from "react";

function Kokolista (props) {
    let kokolista = props.koot.map(function(koko, index) {
        return (
            <p key={index}>
                Ikä: {koko.ika}<br/>
                Paino: {koko.paino}<br/>
                Pituus: {koko.pituus}<br/>
            </p>);
        });
        return ( <div>{kokolista}</div> );
}

export default Kokolista;