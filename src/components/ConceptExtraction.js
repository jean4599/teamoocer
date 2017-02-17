import React from 'react'
import {Row, Col, Button} from 'antd'
import VideoPlayer from './VideoPlayer'
import InputConcept from './InputConcept'

const ConceptExtraction = React.createClass ({
	getPlayedTime(){
		return this.refs.player.getPlayedTime();
	},
	jumpToTime(time){
		this.refs.player.jumpToTime(time);
	},
	conceptAggregation(){
		this.inputConcept.handleConceptAggreagate(
			()=>{window.location.assign('/conceptMapping')}
			);
	},
	render(){
		console.log(this.props.route.courseID) 
		return(
			<Row>
				<Col span={16}><VideoPlayer courseURL={this.props.route.courseURL} controls={true} width={854} height={480} ref='player'/></Col>
				<Col span={8}>
					<InputConcept ref={c=>{this.inputConcept=c}} courseID={this.props.route.courseID} getPlayedTime={this.getPlayedTime} jumpToTime={this.jumpToTime}/>
					<Button type='primary' style={{marginTop: 10}} onClick={()=>this.conceptAggregation()}> Start concept mapping</Button>
				</Col>
			</Row>
			)
	}
})
export default ConceptExtraction