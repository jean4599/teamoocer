import React from 'react'
import ComfirmLinkPhrase from './ComfirmLinkPhrase'
import firebase from 'firebase'
import {toArray} from './../utils'

const NoticeBoard = React.createClass({
	getInitialState: function(){
		return{
			courseID: this.props.courseID,
			user: this.props.user,
			comfirmLinkPhrase:[],
			members: [],
		}
	},
	componentDidMount: function(){
		this.memberFire = firebase.database().ref(this.state.courseID+'/_network/_members');
		this.memberFire.on('value', this.updateMembers);
		this.linkphraseFire = firebase.database().ref(this.state.courseID+'/_notice/_link');
		this.linkphraseFire.on('value', this.updateComfirmLinkPhrase);
	},
	removeLinkPhraseComfirm: function(linkID){
		console.log('remove: '+linkID)
		this.linkphraseFire.child(linkID).remove();
	},
	updateMembers: function(snapshot){
		this.setState({
			members: toArray(snapshot.val())
		})
	},
	updateComfirmLinkPhrase: function(snapshot){
		this.setState({ comfirmLinkPhrase: toArray(snapshot.val())})
	},
	addComfirmLinkPhrase: function(linkID, requester){
		console.log('NoticeBoard: addComfirmLinkPhrase '+linkID, requester)
		var members = this.state.members;
		this.linkphraseFire.child(linkID).update({
			edge: linkID,
			requester: requester
		})
		var i;
		for (i=0; i<members.length; i++){
			this.linkphraseFire.child(linkID).child(members[i]).update({
				comfirm: false
			})
		}
	},
  	render: function() {
  		var _ = this.state;
  		const linkPhraseComfirms = _.comfirmLinkPhrase.map((el,index)=>
  			<ComfirmLinkPhrase 
        			key={el.edge} 
        			linkID={el.edge} 
        			members={_.members} 
        			courseID={_.courseID}
        			user={_.user}
        			removeLinkPhraseComfirm={this.removeLinkPhraseComfirm}
        			changeEdgeToSolidLine={this.props.changeEdgeToSolidLine} />
  		);
    return (
      <div>
        	{linkPhraseComfirms}
      </div>
    )
  }
})

export default NoticeBoard