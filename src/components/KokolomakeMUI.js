import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { Create, Clear } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import {Url} from '../conf';

const url = Url();

class KokolomakeMUI extends Component {
  constructor(props) {
      super(props);
      this.state = { ika: "", paino: "", pituus:""};
  }

  muuta = (e) => {
    this.setState( { [e.target.name]: e.target.value } );
  }

  lisaa = (e) => {
    const formData = new FormData();
    formData.append('ika', this.state.ika);
    formData.append('paino', this.state.paino);
    formData.append('pituus', this.state.pituus);
    axios.post(url + '/koko/add/', formData)
        .then(response => {
            if (response.status === 200) {
                this.setState({viesti: 'Lisättiin'});
                this.tyhjenna();
            } else {
                this.setState({ viesti: 'Lisäys ei onnistunut'});
            }
        })
  }

  tyhjenna = (e) => {
    e.preventDefault();
    this.setState( {ika: "", paino: "", pituus:""} );
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={ classes.paper }>
        <form className={ classes.form }>
        <FormControl required className={classes.formControl} fullWidth>
          <InputLabel htmlFor="ika" margin='normal'>Ikä</InputLabel>
          <Select value={this.state.ika} onChange={this.muuta} name="ika" inputProps={{
              id: "ika"
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value={0}>Vastasyntynyt</MenuItem>
            <MenuItem value={25}>3 kk</MenuItem>
            <MenuItem value={5}>6 kk</MenuItem>
            <MenuItem value={75}>9 kk</MenuItem>
            <MenuItem value={10}>1 v</MenuItem>
            <MenuItem value={15}>1 v 6 kk</MenuItem>
            <MenuItem value={20}>2 v</MenuItem>
            <MenuItem value={30}>3 v</MenuItem>
            <MenuItem value={40}>4 v</MenuItem>
            <MenuItem value={50}>5 v</MenuItem>
            <MenuItem value={60}>6 v</MenuItem>
            <MenuItem value={70}>7 v</MenuItem>
          </Select>
        </FormControl>
        <TextField label='Paino' name='paino' value={ this.state.paino }
               onChange={ this.muuta }  margin='normal' required
               className={ classes.field } fullWidth />
        <TextField label='Pituus' name='pituus' value={ this.state.pituus }
               onChange={ this.muuta } margin='normal' required
               className={ classes.field } fullWidth />
        <div className={ classes.buttonContainer }>
        <Button onClick={this.lisaa} variant='contained' color='primary' className={ classes.button }><Create /> Lisää</Button>
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
    button: { marginRight: 20},
}

export default withStyles(styles)(KokolomakeMUI);