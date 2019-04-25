import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import SanontalistaMUI from './SanontalistaMUI';
import {Url} from '../conf';

const url = Url();

//const url = 'http://localhost:8080';

class HaeMuistot extends Component {
  constructor(props) {
    super(props);
    this.state = {muistot: [], virhe: ''};
  }

  componentDidMount = () => {
    this.haeKaikkiMuistot();
  }

  haeKaikkiMuistot = () => {
    return fetch(url + '/muisto/all')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({muistot: responseJson, virhe: ''});
      })
     .catch((error) => {
        this.setState({muistot: [], virhe: 'Haku epäonnistui'});
   })
 }
render() {
       if (this.state.muistot.length !== 0) {
            return (<SanontalistaMUI muistot={this.state.muistot}/>)
        }
        else if (this.state.muistot.length === 0 && this.state.virhe.length !== 0) {
            return (<Typography variant='body1' style={{ color: 'red', marginTop: 40}}>{this.state.virhe}</Typography>)
        }
        else {
            return (<Typography variant='body1' style={{ color: 'blue', marginTop: 40}}>Ei listattavaa</Typography>)
        }
 }
}

export default HaeMuistot;
