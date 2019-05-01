import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import max1 from "../max1.jpg";
import max2 from "../max2.jpg";
import max3 from "../max3.jpg";
import max4 from "../max4.jpg";
import max5 from "../max5.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const photos = [
  {
      index: 1,
    image:max1,
  },
  {
      index: 2,
    image:max2,
  },
  {
      index: 3,
    image:max3,
  },
  {
      index: 4,
    image:max4,
  },
  {
      index: 5,
    image:max5,
  },
];

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    backgroundColor:'rgba(245, 230, 83, 0.8)',
  },
  img: {
    height: 'auto',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = photos.length;

    return (
        <Card item='true' style={{width: '40%', border: '1px solid black', marginTop: 20, marginLeft: 'auto', marginRight: 'auto', backgroundColor:'rgba(245, 230, 83, 0.8)'}}>
            <CardContent>
                <br/><Typography variant='body2'>Tervetuloa Maxin matkaan! Täältä löydät kaikki hauskimmat sanonnat sekä pituusseurannan verrattuna keskivertopituuksiin. Muistathan lisätä kaikki uusimmat tärkeät muistot?
                    </Typography><br/>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {photos.map((step, index) => (
            <div key={step.index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.image} alt={step.index} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          style={{backgroundColor:'rgba(245, 230, 83, 0.8)'}}
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Seuraava
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Edellinen
            </Button>
          }
        />
        </CardContent>
            </Card>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);