import React from 'react'
import * as firebase from 'firebase'
import { Input, Timeline, Col, Row, Button } from 'antd'
import {toArray, getCookie} from '../utils'
import Duration from './Duration'

const InputConcept = React.createClass({
	getInitialState: function(){
		return {
			concepts:[],
			courseID: this.props.courseID,
			conceptInputValue:'',
			videoPlayerTime: this.props.getPlayedTime,
			jumpToTime: this.props.jumpToTime,
			user: getCookie('uid')
		}
	},
	componentDidMount: function(){
		this.fire = firebase.database().ref(this.state.courseID+"/_concepts/"+this.state.user);
		this.fire.on('value', this.updateConcepts);
	},
	updateConcepts: function(snapshot){
		var conceptsArray = toArray(snapshot.val());
		this.setState({
			concepts: conceptsArray
		})
		console.log(this.state.concepts);
	},
	handleConceptAdd: function(){
		const time = this.state.videoPlayerTime();
		var key = this.fire.push({
			word: this.state.conceptInputValue,
			played: time.played,
			time: time.duration
		}).key;
		firebase.database().ref(this.state.courseID+"/_concepts/"+this.state.user+'/'+key).update({id: key})
		this.setState({conceptInputValue:''})
	},
	handleConceptAggreagate: function(callback){
		this.state.concepts.map((concept,index)=>{
			var ref = firebase.database().ref(this.state.courseID+"/_network/_concepts/"+concept['word']);
			ref.once('value')
			  .then(function(snapshot) {
			    // handle read data.
			    var c = snapshot.val();
			    if(c) {
			    	console.log(c.count)
			    	ref.update({count: c.count+1})
			    	callback()
			    }
			    else {
			    	ref.update({count: 1, id:concept['word']})
			    	callback()
			    }
			  });
		})
	},
	handleConceptInputVlueChange: function(e){
		this.setState({
			conceptInputValue: e.target.value
		})
	},
	render: function(){
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
