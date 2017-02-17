import React from 'react'
import firebase from 'firebase'
import {toArray} from './../utils'

const Cursor = React.createClass({
	render: function(){
		return(
			<p className='cursor' style={{backgroundColor: this.props.color, top:this.props.y, left:this.props.x}} />
			)
	}
})
const CursorPanel = React.createClass({
	getInitialState: function(){
		return{
			courseID: this.props.courseID,
			user: this.props.user,
			cursors: [],
		}
	},
	componentDidMount: function(){
		this.fire = firebase.database().ref(this.state.courseID+'/_cursors/');
		this.fire.on('value', this.updateCursor);
	},
	updateCursor:function(snapshot){
		var result = snapshot.val();
		if(result){
			delete result[this.state.user]
			this.setState({cursors: toArray(result)})
		}
	},
	handleMouseMove:function(x, y){
		var offsetX = x-370;
		var offsetY = y-150
		this.fire.child(this.state.user).update({cursorX: offsetX, cursorY: offsetY})
	},
  	render: function() {
  		const cursors=this.state.cursors.map((cursor,index)=>
  			<Cursor key={index} x={cursor.cursorX} y={cursor.cursorY} color='red' />
  			) 
	    return (
	      <div id='cursor-panel'>
	        {cursors}
	      </div>
	    )
  }
})

export default CursorPanel