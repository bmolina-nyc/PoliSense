import React, {Component} from 'react';
import {Bar, Line, Pie, Scatter} from 'react-chartjs-2';

class Chart extends Component{

    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', "Cambridge", "New Bedford"],
                datasets:[
                    {
                        label: 'Sentiment Analysis',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor:[
                            
                        ]
                    }
                ]
            }
        }
    }


	render(){
		return(
			<div className="chart">

            <Line
            data={this.state.chartData}
            
            options={{maintainAspectRatio: false}}
            />
			</div>
		)
	}
}

export default Chart