import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { HeartOutline } from 'mdi-material-ui';
import IconButton from '@material-ui/core/IconButton';

import {Url} from '../conf';

const url = Url();

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: 700,
    height: 700,
    transform: 'translate(0)'
  },
  titleBar: {
    background:'linear-gradient(to top, rgba(245, 230, 83, 0.8) 0%, ' +
      'rgba(245, 230, 83, 0.3) 70%, rgba(245, 230, 83, 0) 100%)',
  },
icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function KuvalistaMUI(props) {
    const { classes } = props;
      return (
          <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList} cols={2}>
              {props.kuvat.map(kuva => (
                <GridListTile image={url + '/download/' + kuva.kuva} cols={1}>
                    <img src={url + '/download/' + kuva.kuva} alt={kuva.teksti} style={{ height:'400'}} />
                    <GridListTileBar
                        title={kuva.teksti}
                        titlePosition="bottom"
                        actionIcon={
                            <IconButton className={classes.icon}>
                              <HeartOutline />
                            </IconButton>
                        }
                        actionPosition="left"
                        className={classes.titleBar}/>
                </GridListTile>
              ))}
            </GridList>
        </div>
  );

}

KuvalistaMUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KuvalistaMUI);