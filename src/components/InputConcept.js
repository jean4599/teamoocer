import React from 'react'
import * as firebase from 'firebase'
import { Input, Timeline, Col, Row, Button } from 'antd'
import {getGradColor, toArray, getCookie} from '../utils'
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
	componentDidUpdate: function(){
		this.conceptsContainer.scrollTop = this.conceptsContainer.scrollHeight;
	},
	updateConcepts: function(snapshot){
		var conceptsArray = toArray(snapshot.val());
		this.setState({
			concepts: conceptsArray
		})
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
	handleConceptAggreagate: function(){
		var me = this.state.user;
		this.state.concepts.map((concept,index)=>{
			var ref = firebase.database().ref(this.state.courseID+"/_network/_concepts/"+concept['word']);
			ref.once('value')
			  .then(function(snapshot) {
			    // handle read data.
			    var c = snapshot.val();
			    if(c) { //if someone has created this word
			    	ref.child('_who').child(me).update({count:1}).then(function(){//add myself
			    		//update the node color
				    	ref.child('_who').once('value').then(function(snapshot){ //check how many people
				    		var people = toArray(snapshot.val());
				    		var number = people.length;
				    		ref.update({color: getGradColor(number)})
				    	})
			    	})
			    }
			    else { // if this is a new word
			    	ref.update({id:concept['word']})
			    	ref.child('_who').child(me).update({count:1})
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
				<div ref={t=>{this.conceptsContainer = t}} style={{maxHeight: '80%', overflowY: 'scroll'}}>
					{this.state.concepts.map((concept,index)=>{
					return <Timeline.Item key={index} style={{cursor: 'pointer'}} onClick={()=>this.state.jumpToTime(concept.played)}> {concept.word} <Duration seconds={concept.time}/></Timeline.Item>
					})}
				</div>
				<Row>
					<Col span={20}><Input placeholder="New concept" onPressEnter={()=>this.handleConceptAdd()} value={this.state.conceptInputValue} onChange={this.handleConceptInputVlueChange}/></Col>
					<Col span={4}><Button type="primary" onClick={()=>this.handleConceptAdd()}>Add</Button></Col>
				</Row>
			</div>
			)
	}
})
export default InputConcept
