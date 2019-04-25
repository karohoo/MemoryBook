import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Kotisivu () {
    return(
        <Card item='true' style={{width: '40%', border: '1px solid black', marginTop: 20, marginLeft: 'auto', marginRight: 'auto', backgroundColor:'rgba(245, 230, 83, 0.8)'}}>
            <CardHeader title>Tervetuloa Maxin lapsuuteen</CardHeader>
            <CardContent>
                <Typography variant='body2'>Tervetuloa Maxin matkaan! Täältä löydät kaikki hauskimmat sanonnat sekä pituusseurannan verrattuna keskivertopituuksiin. Muistathan lisätä kaikki uusimmat tärkeät muistot?
                    </Typography>
            </CardContent>
            </Card>
        
    )
}

export default Kotisivu;