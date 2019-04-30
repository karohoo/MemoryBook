import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Add, Clear } from '@material-ui/icons';
import { CameraImage } from 'mdi-material-ui';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import {Url} from '../conf';

const url = Url();


class KuvalomakeMUI extends Component {
  constructor(props) {
      super(props);
      this.state = { kuva: null, teksti: ""};
  }

  muuta = (e) => {
    this.setState( { [e.target.name]: e.target.value } );
  }

  lisaa = (e) => {
    const formData = new FormData();
    formData.append('kuva', this.state.kuva);
    formData.append('teksti', this.state.teksti);
    axios.post(url + '/kuva/add/', formData)
        .then(response => {
            if (response.status === 200) {
                this.setState({viesti: 'Tiedot lisättiin'});
                this.tyhjenna();
            } else {
                this.setState({ viesti: 'Tietojen lisäys epäonnistui'});
            }
        })
  }

  tyhjenna = (e) => {
    this.setState( { kuva: null, teksti: ""} );
  }
  
  muutaKuva = (e) => {
    this.setState( { [e.target.name]: e.target.files[0] } );
  }

  render() {
      let kuvanNimi = '';
      if (this.state.kuva !== null) {
          kuvanNimi = this.state.kuva.name;
      }
    const { classes } = this.props;
    return (
        <Paper className={ classes.paper }>
        <form className={ classes.form }>
        <Input accept='image/*' name='kuva' id='kuva' type='file'
              style={{display: 'none'}}
              onChange={this.muutaKuva} />

          <InputLabel htmlFor='kuva'>
            Kuva
            <Button component='span'><CameraImage /></Button>
            {kuvanNimi}
          </InputLabel>
         
        <TextField label='Teksti' name='teksti' value={ this.state.teksti }
               onChange={ this.muuta } margin='normal' required
               className={ classes.field } fullWidth />
               
        <div className={ classes.buttonContainer }>
            <Button onClick={this.lisaa} variant='contained' color='primary' className={ classes.button }><Add /> Lisää</Button>
            <Button onClick={this.tyhjenna} className={ classes.button }><Clear /> Tyhjennä</Button>
        </div>
      </form>
        <Typography variant='body1' style={{fontWeight: 'bold', marginTop: 10}}>{this.state.viesti}</Typography>
        </Paper>
    );
  }
}

const styles = {
    paper: {width: '40%', border: '1px solid black', marginTop: 20, marginLeft: 'auto', marginRight: 'auto', backgroundColor:'rgba(245, 230, 83, 0.8)'},
    form: { padding: 20},
    buttonContainer: {textAlign: 'center'},
    button: { marginRight: 20}
}

export default withStyles(styles)(KuvalomakeMUI);