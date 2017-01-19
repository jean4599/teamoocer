import React from 'react'
import * as firebase from 'firebase'
import { Input, Timeline, Col, Row, Button } from 'antd'
import {toArray} from '../utils'
import Duration from './Duration'

const InputConcept = React.createClass({
	getInitialState(){
		return {
			concepts:[],
			courseID: this.props.courseID,
			conceptInputValue:'',
			videoPlayerTime: this.props.getPlayedTime,
			jumpToTime: this.props.jumpToTime,
		}
	},
	componentDidMount(){
		this.fire = firebase.database().ref(this.state.courseID+"/_concepts");
		this.fire.on('value', this.updateConcepts);
	},
	updateConcepts(snapshot){
		var conceptsArray = toArray(snapshot.val());
		this.setState({
			concepts: conceptsArray
		})
		console.log(this.state.concepts);
	},
	handleConceptAdd(){
		const time = this.state.videoPlayerTime();
		var key = this.fire.push({
			word: this.state.conceptInputValue,
			played: time.played,
			time: time.duration
		}).key;
		firebase.database().ref(this.state.courseID+"/_concepts/"+key).update({id: key})
		this.setState({conceptInputValue:''})
	},
	handleConceptInputVlueChange(e){
		this.setState({
			conceptInputValue: e.target.value
		})
	},
	render(){
		return (
			<div>
				<Timeline>
					{this.state.concepts.map((concept,index)=>{
					return <Timeline.Item style={{cursor: 'pointer'}} onClick={()=>this.state.jumpToTime(concept.played)}> {concept.word} <Duration seconds={concept.time}/></Timeline.Item>
					})}
				</Timeline>
				<Row>
					<Col span={20}><Input placeholder="New concept" onPressEnter={()=>this.handleConceptAdd()} value={this.state.conceptInputValue} onChange={this.handleConceptInputVlueChange}/></Col>
					<Col span={4}><Button type="primary" onClick={()=>this.handleConceptAdd()}>Add</Button></Col>
				</Row>
			</div>
			)
	}
})
export default InputConcept
