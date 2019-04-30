import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Home, Add, Menu as MenuIcon, Camera, ShowChart} from '@material-ui/icons';
import { FormatQuoteClose, ClipboardText, CameraImage, Ruler } from 'mdi-material-ui';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';


class MenuMUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl1: null,
      anchorEl2: null,
    };
  }

  handleMenu = (event) => {
      this.setState({ anchorEl1: event.currentTarget });
  };

handleMenu2 = (event) => {
    this.setState({ anchorEl2: event.currentTarget });
};

  handleClose = () => {
    this.setState({ anchorEl1: null, anchorEl2: null });
  };

  render() {
    const menu =
      <Menu
      anchorEl={this.state.anchorEl1}
      open={Boolean(this.state.anchorEl1)}
      onClose={this.handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={this.handleClose} component={Link} to='/etusivu'><Home />
            <ListItemText inset primary="Etusivu" />
        </MenuItem>
        <MenuItem onClick={this.handleClose} component={Link} to='/listaasanonnat' ><ClipboardText />
            <ListItemText inset primary="Sanonnat" />
        </MenuItem>
        <MenuItem onClick={this.handleClose} component={Link} to='/listaakuvat' ><Camera />
            <ListItemText inset primary="Kuvagalleria" />
        </MenuItem>
        <MenuItem onClick={this.handleClose} component={Link} to='/kokotaulukko'><ShowChart />
            <ListItemText inset primary="Pituuskäyrä" />
        </MenuItem>
      </Menu>;
            
     const menu2 =
      <Menu
      anchorEl={this.state.anchorEl2}
      open={Boolean(this.state.anchorEl2)}
      onClose={this.handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={this.handleClose} component={Link} to='/lisaasanonta'><FormatQuoteClose />
                <ListItemText inset primary="Lisää sanonta" />
        </MenuItem>
        <MenuItem onClick={this.handleClose} component={Link} to='/lisaakuva'><CameraImage />
                <ListItemText inset primary="Lisää kuva" />
        </MenuItem>
        <MenuItem onClick={this.handleClose} component={Link} to='/lisaakoko'><Ruler />
                <ListItemText inset primary="Kokomerkintä" />
      </MenuItem>
    </Menu>;

    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton onClick={ this.handleMenu } color='inherit' ><MenuIcon /></IconButton>
            { menu }
            <IconButton onClick={ this.handleMenu2 } color='inherit' ><Add /></IconButton>
            { menu2 }
            <Typography variant='h5' color='inherit' style={ {flexGrow: 1, textAlign: 'center'} }>Maxin lapsuus</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default MenuMUI;
