import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import {Url} from '../conf';

const url = Url();

function Kuvagalleria (props) {
  let kuvalista = props.kuvat.map(function(kuva, index) {
    return (
      <Grid item key={index}>
       <Card item='true' key={index} style={{ width: 350, marginTop: 30}}>
          <CardHeader title= { kuva.teksti } />
            <CardContent>
                <CardMedia style={{ height:200}} image={url + '/download/' + kuva.kuva} title='Lapsuuskuva' />
            </CardContent>
       </Card>
      </Grid>);
    });
 return ( <Grid container spacing={24}>{ kuvalista }</Grid> );
}

export default Kuvagalleria;