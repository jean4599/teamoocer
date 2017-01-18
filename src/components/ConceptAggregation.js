import React from 'react'
import firebase from 'firebase'
import {browserHistory} from 'react-router'
import {toArray, getMarks} from '../utils'
import { Row, Col, Tag, Card, Slider, Button, Modal } from 'antd';
import VideoPlayer from './VideoPlayer'

const colorLevel=['#ff3300', '#009933', '#0033cc'];
const ConceptAggregation = React.createClass({
  getInitialState: function() {
    return {
      concepts:[],
      courseID: this.props.route.courseID,
      courseURL: this.props.route.courseURL,
      selectedLevel: 0,
      level1_concepts: [],
      level2_concepts: [],
      level3_concepts: [],
      sliderValue:0,
    };
  },
  componentDidMount: function(){
  	this.fire = firebase.database().ref(this.state.courseID + '/_concepts');
  	this.fire.on('value', this.updateConcepts);
  },
  updateConcepts(snapshot){
		var conceptsArray = toArray(snapshot.val());
		var marks = getMarks(snapshot.val(), 'played', 'word');
		this.setState({
			conceptsMap:snapshot.val(),
			concepts: conceptsArray,
			marks: marks,
		})
  },
  handleLevelChange(level){
  	if(this.state.selectedLevel!=level){
  		this.setState({selectedLevel:level})
  	}
  },
  handleLevelSubmit(){
  	//check if every concept has level
  	var conceptsMap = this.state.conceptsMap;
  	var flag=true;
  	Object.keys(conceptsMap).map(function(key,index){
  		if(conceptsMap[key]['level']==undefined) flag=false
  	})
  	if(flag==false){
  		Modal.warning({
			    title: 'Some concepts are missing in the levels',
			    content: 'You need to put all the concepts into the level boxes',
			  });
  	}
  	else{
  		Object.keys(conceptsMap).map((key,index)=>{
	  		firebase.database().ref(this.state.courseID + '/_concepts/'+key).update({level: conceptsMap[key]['level']})
	  	})
	  	window.location.assign('/conceptMapping')
  	}
  },
  handleSliderChanged(value){
  	this.setState({sliderValue:value})
  	this.player.seekTo(parseFloat(value))
  },
  handleConceptClicked(key){
  	var concept = this.state.conceptsMap[key];
  	this.state.conceptsMap[key].level=this.state.selectedLevel;
  	
  	var newConcepts = toArray(this.state.conceptsMap);
  	this.setState({concepts: newConcepts});

  	var newLevel1 = toArray(newConcepts.filter(function(obj){return obj.level==0}));
  	this.setState({level1_concepts: newLevel1});
  	var newLevel2 = toArray(newConcepts.filter(function(obj){return obj.level==1}));
  	this.setState({level2_concepts: newLevel2});
  	var newLevel3 = toArray(newConcepts.filter(function(obj){return obj.level==2}));
  	this.setState({level3_concepts: newLevel3});
  },
  handleConceptMouseOver(time){
  	var value = time.toFixed(2);
  	this.handleSliderChanged(value);
  },
  cardStyle(level){
  	if(level==this.state.selectedLevel)return {border: '2px solid '+colorLevel[level], width:600}
  	else return {width:600}
  },
	showMark(value){
		var result = this.state.concepts.filter(function(obj){return parseFloat(obj.played).toFixed(2)==value})
		var show="";
		result.map((function(obj){show=show+' '+obj.word}))
		return show
	},
  render: function() {
    return (
    	<Row>
    		<Col span={12}>
	      		<Card title="Level 1" style={this.cardStyle(0)} onClick={()=>this.handleLevelChange(0)}>
	      			{this.state.level1_concepts.map((concept, index)=>{
	      				return <Tag>{concept.word}</Tag>
	      				})}
	      		</Card>
	      		<Card title="Level 2" style={this.cardStyle(1)} onClick={()=>this.handleLevelChange(1)}>
	      		{this.state.level2_concepts.map((concept, index)=>{
	      				return <Tag>{concept.word}</Tag>
	      				})}
	      		</Card>
	      		<Card title="Level 3" style={this.cardStyle(2)} onClick={()=>this.handleLevelChange(2)}>
	      		{this.state.level3_concepts.map((concept, index)=>{
	      				return <Tag>{concept.word}</Tag>
	      				})}
	      		</Card>
	      		<Row><Col span={8} offset={8}><Button type='primary' size='large' style={{margin:10}} onClick={()=>this.handleLevelSubmit()}> Finish </Button></Col></Row>
	      	</Col>
	    	<Col span={12}>
	    	<Card style={{ width: 640 }}>
	        {this.state.concepts.map((concept,index)=>{
	        	return <Tag style={{fontSize: '20px'}} color={colorLevel[concept.level]} onMouseEnter={()=>this.handleConceptMouseOver(concept.played)} onClick={()=>this.handleConceptClicked(concept.key)}>{concept.word}</Tag>
	        })}
	        </Card>
	        <Slider value={this.state.sliderValue} onChange={this.handleSliderChanged} tipFormatter={this.showMark} marks={this.state.marks} min={0} max={1} step={0.01}/>
	        <VideoPlayer ref={player => { this.player=player }} playing={false} courseURL={this.state.courseURL} width={640} height={390} controls={0}/>
	      	</Col>
	      	
    	</Row>
    );
  }
});
export default ConceptAggregation