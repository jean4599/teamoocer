webpackHotUpdate(0,{459:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=(a(436),a(439)),n=s(l),r=(a(365),a(368)),i=s(r),u=(a(389),a(392)),m=s(u),o=(a(406),a(157)),c=s(o),f=(a(358),a(361)),d=s(f),h=(a(371),a(372)),p=s(h),g=a(123),E=s(g),k=a(403),v=a(296),D=s(v),C=a(456),I=(s(C),E.default.createClass({displayName:"ComfirmLinkPhrase",getInitialState:function(){return{linkID:this.props.linkID,user:this.props.user,members:this.props.members,courseID:this.props.courseID,edge:"",inputMessage:"",messages:[]}},componentDidMount:function(){this.messageFire=D.default.database().ref(this.state.courseID+"/_notice/_link/"+this.state.linkID+"/messages"),this.messageFire.on("value",this.updateMessage),this.comfirmStatusFire=D.default.database().ref(this.state.courseID+"/_notice/_link/"+this.state.linkID),this.comfirmStatusFire.on("value",this.updateComfirmStatus),this.edgeFire=D.default.database().ref(this.state.courseID+"/_network/_edges/"+this.state.linkID),this.edgeFire.on("value",this.updateEdgeData),this.nodeFire=D.default.database().ref(this.state.courseID+"/_network/_concepts/")},componentDidUpdate:function(){this.messageContainer.scrollTop=this.messageContainer.scrollHeight},updateMessage:function(e){this.setState({messages:(0,k.toArray)(e.val())})},updateEdgeData:function(e){var t=e.val();console.log("the comfirm edge:"),console.log(t);var a=t.from,s=t.to;this.nodeFire.child(a).once("value").then(function(e){e.val().label}),this.nodeFire.child(s).once("value").then(function(e){e.val().label});var l={label:t.label,from:from_node,to:to_node};this.setState({edge:l})},updateComfirmStatus:function(e){var t=this.state.user,a=e.val(),s=!1;s=a.requester==t||a[t].comfirm,a&&this.setState({mycomfirmStatus:s,allComfirmStatus:a})},checkAllComfirmed:function(){for(var e=this.state.members,t=this.state.allComfirmStatus,a=0;a<e.length;a++)if(console.log("check: "+e[a].uid+": status="+t[e[a].uid].comfirm),!t[e[a].uid].comfirm)return!1;return!0},sendMesssage:function(){this.messageFire.push({message:this.state.inputMessage,who:this.state.user}),this.setState({inputMessage:""})},handleInputMessageChnage:function(e){this.setState({inputMessage:e.target.value})},handleComfirm:function(e){var t=this;this.comfirmStatusFire.child(this.state.user).update({comfirm:!0},function(e){e?alert("Data could not be saved."+e):t.checkAllComfirmed()&&(t.props.removeLinkPhraseComfirm(t.state.linkID),t.props.changeEdgeToSolidLine(t.state.linkID))})},render:function(){var e=this,t=this.state;return E.default.createElement(n.default,null,E.default.createElement(d.default,null,E.default.createElement(p.default,{span:24,id:"comfirm-title"},"Do you think this is a proper link phrase?")),E.default.createElement(d.default,{className:"comfirm-graph-container graph"},E.default.createElement(p.default,{span:6,className:"comfirm-graph"}," ",E.default.createElement("p",{className:"node right"})," "),E.default.createElement(p.default,{span:12,className:"comfirm-graph"}," ",E.default.createElement("p",{className:"link"})," "),E.default.createElement(p.default,{span:6,className:"comfirm-graph"}," ",E.default.createElement("p",{className:"node left"})," ")),E.default.createElement(d.default,{className:"comfirm-graph-container text"},E.default.createElement(p.default,{span:6,className:"comfirm-graph"},t.edge.from),E.default.createElement(p.default,{span:12,className:"comfirm-graph"},t.edge.label),E.default.createElement(p.default,{span:6,className:"comfirm-graph"},t.edge.to)),E.default.createElement(d.default,null,E.default.createElement("div",{className:"message-container",ref:function(t){e.messageContainer=t}},t.messages.map(function(e,a){return e.who==t.user?E.default.createElement(p.default,{key:a,span:24},E.default.createElement("p",{className:"message right"}," ",e.message," ")):E.default.createElement(p.default,{key:a,span:24},E.default.createElement("p",{key:a,className:"message left"}," ",e.message," "))}))),E.default.createElement(d.default,null,E.default.createElement(m.default,{prefix:E.default.createElement(c.default,{type:"message"}),placeholder:"I want to say",value:t.inputMessage,onPressEnter:function(){return e.sendMesssage()},onChange:function(t){return e.handleInputMessageChnage(t)}})),E.default.createElement(d.default,null,E.default.createElement(p.default,{span:24},E.default.createElement(i.default,{className:"full-length",type:"primary",disabled:t.mycomfirmStatus,onClick:function(t){e.handleComfirm(t)}},"Yes! Let's use it!"))))}}));t.default=I}});