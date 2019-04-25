import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import KuvalistaMUI from './KuvalistaMUI';
import {Url} from '../conf';

const url = Url();

//const url = 'http://localhost:8080';

class HaeKuvat extends Component {
  constructor(props) {
    super(props);
    this.state = {kuvat: [], virhe: ''};
  }

  componentDidMount = () => {
    this.haeKaikkiKuvat();
  }

  haeKaikkiKuvat = () => {
    return fetch(url + '/kuva/all')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({kuvat: responseJson, virhe: ''});
      })
     .catch((error) => {
        this.setState({kuvat: [], virhe: 'Haku epäonnistui'});
   })
 }
render() {
       if (this.state.kuvat.length !== 0) {
            return (<KuvalistaMUI kuvat={this.state.kuvat}/>)
        }
        else if (this.state.kuvat.length === 0 && this.state.virhe.length !== 0) {
            return (<Typography variant='body1' style={{ color: 'red', marginTop: 40}}>{this.state.virhe}</Typography>)
        }
        else {
            return (<Typography variant='body1' style={{ color: 'blue', marginTop: 40}}>Ei listattavaa</Typography>)
        }
 }
}

export default HaeKuvat;