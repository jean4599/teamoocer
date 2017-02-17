import React from 'react'
import Network from './Network'
import NoticeBoard from './NoticeBoard'
import CursorPanel from './CursorPanel'
import ChatRoom from './ChatRoom'
import {Row, Col} from 'antd'
import {getCookie} from '../utils'

const ConceptMapping = React.createClass({
	getInitialState: function(){
		return{
				courseID: this.props.route.courseID,
      			courseURL: this.props.route.courseURL,
      			user: getCookie('uid')			
		}
	},
	sendLinkPhraseNotice: function(edgeID){
		this.noticeBoard.addComfirmLinkPhrase(edgeID, this.state.user);
	},
	handleMouseMove: function(e){
		e.persist()
		this.cursorPanel.handleMouseMove(e.clientX, e.clientY)
	},
	changeEdgeToSolidLine: function(edgeID){
		this.network.changeEdgeToSolidLine(edgeID)
	},
	render: function(){
		var _ = this.state;
		return(
			<div>
				<Row>
					<Col span={5}>
						<NoticeBoard ref={board=>{this.noticeBoard=board}} 
							courseID={_.courseID}
							user={_.user}
							changeEdgeToSolidLine={this.changeEdgeToSolidLine}/>
					</Col>
					<Col span={15}>
						<div id='network-container'
							onMouseMove={(e)=>{this.handleMouseMove(e)}}>

							<CursorPanel 
								ref={panel=>{this.cursorPanel = panel}}
								courseID={_.courseID}
								user={_.user} />
							<Network 
								ref={network=>{this.network=network}}
								courseURL={_.courseURL} 
								courseID={_.courseID}
								sendLinkPhraseNotice={this.sendLinkPhraseNotice} />
						</div>
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