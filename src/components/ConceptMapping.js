import React from 'react'
import Network from './Network'
import NoticeBoard from './NoticeBoard'
import CursorPanel from './CursorPanel'
import ChatRoom from './ChatRoom'
import ConceptMapInformation from './ConceptMapInformation'
import {Row, Col, Button, Modal} from 'antd'
import {getCookie} from '../utils'
import ReactCursorPosition from 'react-cursor-position'

const ConceptMapping = React.createClass({
	getInitialState: function(){
		return{
				courseID: this.props.courseID,
      			courseURL: this.props.courseURL,
      			user: getCookie('uid')			
		}
	},
	sendLinkPhraseNotice: function(edgeID){
		this.noticeBoard.addComfirmLinkPhrase(edgeID, this.state.user);
	},
	handleMouseMove: function(e){
		// e.persist()
		// this.cursorPanel.handleMouseMove(e.clientX, e.clientY)
		this.cursorPanel.handleMouseMove(e.x, e.y)
	},
	changeEdgeToSolidLine: function(edgeID){
		this.network.changeEdgeToSolidLine(edgeID)
	},
	showInformation: function(){
		 Modal.info({
		    title: 'How to build a concept map?',
		    content: (
		      <ConceptMapInformation />
		    ),
		    onOk() {},
		 });
	},
	render: function(){
		var _ = this.state;
		return(
			<div>
				<Row style={{height:'100%'}}>
					<Col span={5}>
						<NoticeBoard ref={board=>{this.noticeBoard=board}} 
							courseID={_.courseID}
							user={_.user}
							changeEdgeToSolidLine={this.changeEdgeToSolidLine}/>
					</Col>
					<Col span={15}>
						<ReactCursorPosition id='network-container'
							// onMouseMove={(e)=>{this.handleMouseMove(e)}}
							onCursorPositionChanged={(e)=>{this.handleMouseMove(e)}}
							>

							<CursorPanel 
								ref={panel=>{this.cursorPanel = panel}}
								courseID={_.courseID}
								user={_.user} />
							<Network 
								ref={network=>{this.network=network}}
								courseURL={_.courseURL} 
								courseID={_.courseID}
								sendLinkPhraseNotice={this.sendLinkPhraseNotice} />
						</ReactCursorPosition>
					</Col>
					<Col span={4}>
						<ChatRoom
							courseID={_.courseID}
							user={_.user} />
					</Col>
				</Row>
			</div>
			)
	}
})
export default ConceptMapping