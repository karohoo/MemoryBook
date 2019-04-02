import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Home, Create, List, ShowChart} from "@material-ui/icons";
import SanontalomakeMUI from "../components/SanontalomakeMUI";
import SanontalistaMUI from "../components/SanontalistaMUI";
import KokolomakeMUI from "../components/KokolomakeMUI";
import KokolistaMUI from "../components/KokolistaMUI";

const styles = {
  root: {
    flexGrow: 1,
  },
};

class CenteredTabs extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {value:0, sanontataulukko: this.props.sanontataulukko};
    }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static" color="primary">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          centered
        >
          <Tab label="Etusivu" icon={<Home/>} />
          <Tab label="Lisää sanonta" icon={<Create/>}/>
          <Tab label="Sanonnat" icon={<List/>} />
            <Tab label="Kokomerkintä" icon={<Create/>}/>
            <Tab label="Pituuskäyrä" icon={<ShowChart/>} />
        </Tabs>
        </AppBar>
        {this.state.value === 0 && < SanontalistaMUI sanonnat={this.state.sanontataulukko} />}
        {this.state.value === 1 && <SanontalomakeMUI />}
        {this.state.value === 2 && <SanontalistaMUI sanonnat={this.state.sanontataulukko}/>}
        {this.state.value === 3 && <KokolomakeMUI />}
        {this.state.value === 4 && <KokolistaMUI />
        }
        </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);