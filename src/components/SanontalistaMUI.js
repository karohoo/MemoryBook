import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { DeathlyHallows } from 'mdi-material-ui';

function SanontalistaMUI (props) {
  let sanontalista = props.muistot.map(function(muisto, index) {
    return (
        <Grid item>
       <Card item='true' key={index} style={{ border: '1px solid black', width: 400, marginTop: 20, backgroundColor:'rgba(245, 230, 83, 0.8)'}}>
          <CardHeader action={
                <IconButton>
                    <DeathlyHallows />
                </IconButton>
            }
            title= { muisto.paivamaara } 
                    subheader={muisto.tilanne}/>
          <CardContent>
            <Typography component="p">{ muisto.sanonta }</Typography>
            <Typography component="p" align='right'>- { muisto.ika }</Typography>
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