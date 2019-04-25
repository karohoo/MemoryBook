import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import {Url} from '../conf';

const url = Url();

function SanontalistaMUI (props) {
  let sanontalista = props.muistot.map(function(muisto, index) {
    return (
        <Grid item>
       <Card item='true' key={index} style={{ border: '1px solid black', width: 400, marginTop: 20, backgroundColor:'rgba(245, 230, 83, 0.8)'}}>
          <CardHeader title= { muisto.paivamaara } 
                    subheader={muisto.tilanne}/>
          <CardContent>
            <Typography variant='body1'>{ muisto.ika }</Typography>
            <br/>
            <Typography variant='body1'>{ muisto.sanonta }</Typography>
          </CardContent>
       </Card>
        </Grid>
    );
    });
 return ( 
     <Grid container spacing="24" style={{padding: 24}}>{ sanontalista }</Grid> 
 );
}
         
      

export default SanontalistaMUI;