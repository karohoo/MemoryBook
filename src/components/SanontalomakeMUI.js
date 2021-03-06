import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Add, Clear } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import {Url} from '../conf';

const url = Url();


class SanontalomakeMUI extends Component {
  constructor(props) {
      super(props);
      this.state = { ika: "", paivamaara: "", tilanne: "", sanonta: "" };
  }

  muuta = (e) => {
    this.setState( { [e.target.name]: e.target.value } );
  }

  lisaa = (e) => {
    const formData = new FormData();
    formData.append('ika', this.state.ika);
    formData.append('paivamaara', this.state.paivamaara);
    formData.append('tilanne', this.state.tilanne);
    formData.append('sanonta', this.state.sanonta);
    axios.post(url + '/muisto/add/', formData)
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
    this.setState( { ika: "", paivamaara: "", tilanne: "", sanonta: ""  } );
  }

  render() {
    const { classes } = this.props;
    return (
        <Paper className={ classes.paper }>
        <form className={ classes.form }>
        <TextField label='Ikä' name='ika' value={ this.state.ika }
               onChange={ this.muuta } margin='normal' required
               className={ classes.field } fullWidth />
         
        <TextField label='Päivämäärä' name='paivamaara' value={ this.state.paivamaara }
               onChange={ this.muuta } margin='normal' required
               className={ classes.field } fullWidth />
               
        {/*
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fiLocale}>
             <DatePicker label='Päivämäärä' name='paivamaara' keyboard
                        fullWidth required
                        cancelLabel='Peruuta'
                        value={this.state.paivamaara}
                        onChange={this.muutaPaivamaara}
                        format='dd.MM.yyyy' />
          </MuiPickersUtilsProvider>
          */}
        <TextField label='Tilanne' name='tilanne' value={ this.state.tilanne }
               onChange={ this.muuta } margin='normal' multiline rows="3"
               className={ classes.field } fullWidth />
        <TextField label='Sanonta' name='sanonta' value={ this.state.sanonta }
              onChange={ this.muuta } margin='normal' multiline rows="3" required
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
    paper: {width: '60%', border: '1px solid black', marginTop: 20, marginLeft: 'auto', marginRight: 'auto', backgroundColor:'rgba(245, 230, 83, 0.8)'},
    form: { padding: 20},
    buttonContainer: {textAlign: 'center'},
    button: { marginRight: 20}
}

export default withStyles(styles)(SanontalomakeMUI);
