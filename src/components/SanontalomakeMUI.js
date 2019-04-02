import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Create, Clear } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

class SanontalomakeMUI extends Component {
  constructor(props) {
      super(props);
      this.state = { ika: "", paivamaara: "", tilanne: "", sanonta: "" };
  }

  muuta = (e) => {
    this.setState( { [e.target.name]: e.target.value } );
  }

  lisaa = (e) => {
    e.preventDefault();
  }

  tyhjenna = (e) => {
    e.preventDefault();
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
               onChange={ this.muuta }  margin='normal' required
               className={ classes.field } fullWidth />
        <TextField label='Tilanne' name='tilanne' value={ this.state.tilanne }
               onChange={ this.muuta } margin='normal' multiline rows="3"
               className={ classes.field } fullWidth />
        <TextField label='Sanonta' name='sanonta' value={ this.state.sanonta }
              onChange={ this.muuta } margin='normal' multiline rows="3" required
              className={ classes.field } fullWidth />
        <Button onClick={this.lisaa} variant='contained' color='primary' className={ classes.button }><Create /> Lisää</Button>
        <Button onClick={this.tyhjenna} variant='contained'  color='secondary' className={ classes.button }><Clear /> Tyhjennä</Button>
      </form>
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
