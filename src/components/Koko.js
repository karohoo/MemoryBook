import React from "react";

function Koko (props) {
    return (
        <p>
            Ikä: {props.koko.ika}<br/>
            Paino: {props.koko.paino}<br/>
            Pituus: {props.koko.pituus}<br/>
        </p>
    );
}

export default Koko;