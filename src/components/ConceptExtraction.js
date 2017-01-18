import React from 'react'
import {Row, Col} from 'antd'
import VideoPlayer from './VideoPlayer'
import InputConcept from './InputConcept'

const ConceptExtraction = React.createClass ({
	getPlayedTime(){
		return this.refs.player.getPlayedTime();
	},
	jumpToTime(time){
		this.refs.player.jumpToTime(time);
	},
	render(){
		console.log(this.props.route.courseID)
		return(
			<Row>
				<Col span={16}><VideoPlayer courseURL={this.props.route.courseURL} controls={1} width={854} height={480} ref='player'/></Col>
				<Col span={8}><InputConcept courseID={this.props.route.courseID} getPlayedTime={this.getPlayedTime} jumpToTime={this.jumpToTime}/></Col>
			</Row>
			)
	}
})
export default ConceptExtraction