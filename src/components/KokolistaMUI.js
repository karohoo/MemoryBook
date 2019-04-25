import React from 'react';
import {Line as LineChart} from 'react-chartjs';
import "../css/tyyli.css";
import Card from "@material-ui/core/Card";

//const styles = {
//    paperContainer: {
  //      backgroundImage: "url(" + imgUrl + ")",
    //    backgroundSize: "cover",
       // height: "800px"
//    }
//}

function chartData() {
  return {
    labels: ['Vastasyntynyt', '3 kk', '6 kk', '9 kk', '1 v', '1 v 6 kk', '2 v', '3 v', '4 v', '5 v', '6 v', '7 v'],
    datasets: [
      {
        label: 'Keskimääräinen pituus',
        fillColor: 'rgba(220, 220, 220, 0.2)',
        strokeColor: 'rgba(0, 0, 0, 0.5)',
        pointColor: 'rgba(0, 0, 0, 0.5)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(245, 230, 83, 0.2)',
        data: [52, 63, 70, 75, 78, 84, 88, 97, 105, 111, 118, 125 ],
      },
      {
        label: 'Oma pituus',
        fillColor: 'rgba(245, 230, 83, 1)',
        strokeColor: 'rgba(0, 0, 0, 0.8)',
        pointColor: 'rgba(0, 0, 0, 0.8)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(0, 0, 0, 1)',
        data: [53, 65, 71, 74, 79, 85, 89, 98, 105],
      },
    ]
  }
}


class LineChartExample extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: chartData()
    }
  }

  render() {
    return (
      <Card item='true' style={{ width: '55%', border: '1px solid black', marginTop: 20, marginLeft: 'auto', marginRight: 'auto', backgroundColor:'rgba(245, 230, 83, 0.8)'}}>
        <LineChart data={this.state.data}
          width="800" height="350"/>
      </Card>
    )
  }
}

export default LineChartExample;