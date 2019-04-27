import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
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
    background:'rgba(245, 230, 83, 0.8)'
  }
});

function KuvalistaMUI(props) {
    const { classes } = props;
      return (
          <div className={classes.root}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
              {props.kuvat.map(kuva => (
                <GridListTile key={kuva.kuva} cols={kuva.featured ? 2 : 1} rows={kuva.featured ? 2 : 1}>
                    <img src={url + '/uploads/' + kuva.kuva} alt={kuva.teksti} style={{height: 200}} />
                    <GridListTileBar
                        title={kuva.teksti}
                        titlePosition="top"
                        actionIcon={
                            <IconButton className={classes.icon}>
                              <StarBorderIcon />
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