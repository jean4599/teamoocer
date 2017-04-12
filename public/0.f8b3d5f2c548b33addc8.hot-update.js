webpackHotUpdate(0,{435:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0});var d,i=(a(436),a(439)),s=n(i),l=(a(365),a(368)),r=n(l),c=(a(389),a(392)),u=n(c),p=(a(406),a(157)),f=n(p),h=a(440),g=n(h),v=a(441),E=(n(v),a(456)),m=(n(E),a(123)),w=n(m),y=a(158),C=(n(y),a(296)),b=n(C),k=a(403),N={physics:{enabled:!1},nodes:{chosen:!1,shape:"box",color:"#C0FCD0"},interaction:{hover:!0,selectConnectedEdges:!1},layout:{randomSeed:100},locale:"en",locales:{en:{edit:"Edit",del:"Delete selected",back:"Back",addNode:"Add Node",addEdge:"Add Edge",editNode:"Edit Node",editEdge:"Edit Edge",addDescription:"Click in an empty space to place a new node.",edgeDescription:"Click on a node and drag the edge to another node to connect them.",editEdgeDescription:"Click on the control points and drag them to a node to connect to it.",createEdgeError:"Cannot link edges to a cluster.",deleteClusterError:"Clusters cannot be deleted.",editClusterError:"Clusters cannot be edited."}}},D=[],S=[],I={},_=null,P=w.default.createClass((d={displayName:"ConceptMapping",getInitialState:function(){return{courseID:this.props.courseID,courseURL:this.props.courseURL,user:this.props.user,data:{},concepts:[],mode:"nomal",edgeLabelValue:"",requests:[],nodeInitialized:!1,newConcept:""}},componentDidMount:function(){var e=this;this.nodefire=b.default.database().ref(this.state.courseID+"/_network/_concepts"),this.nodefire.on("value",this.updateConcept),this.edgefire=b.default.database().ref(this.state.courseID+"/_network/_edges"),this.edgefire.on("value",this.updateEdge),N.manipulation={addNode:function(t,a){e.setState({displayAddNodePopup:"block",newNodeData:t})},deleteNode:function(t,a){var n=t.nodes[0];n&&e.nodefire.child(n).remove()},deleteEdge:function(t,a){var n=t.edges[0];n&&e.edgefire.child(n).remove()},addEdge:function(t,a){if(t.from==t.to){var n=confirm("Do you want to connect the node to itself?");1==n&&(e.setState({newEdgeData:t}),e.saveNewEdge())}else e.setState({newEdgeData:t}),e.saveNewEdge()}}},updateConcept:function(e){var t=["id","id","color","x","y"],a=["id","label","color","x","y"],n=(0,k.toArray)(e.val());n.map(function(e,t){console.log(e),console.log(e.key)}),this.setState({concepts:n}),D=(0,k.retrieveData)(e.val(),t,a),D=new g.default.DataSet(D),this.updateMap()},updateEdge:function(e){var t=["from","to","id","label","dashes"],a=["from","to","id","label","dashes"];S=(0,k.retrieveData)(e.val(),t,a),S-new g.default.DataSet(S),this.updateMap()},updateMap:function(){var e=this,t=null,a=null;D!=[]&&null!=_&&(t=_.getViewPosition(),a=_.getScale()),I={nodes:D,edges:S},_=new g.default.Network(this.container,I,N),t&&a&&(_.moveTo({position:t,scale:a,animation:!1}),this.props.changeMapView(t.x,t.y)),_.on("doubleClick",function(t){var a=t.edges[0];a&&e.setState({selectedEdge:a,displayEditEdgePopup:"block"})}),_.on("dragEnd",function(t){var a=t.nodes[0];if(a){var n={x:t.pointer.canvas.x,y:t.pointer.canvas.y};e.updateConcept(a,n)}else{console.log("Drag the map");var o=_.getViewPosition();e.props.changeMapView(o.x,o.y)}}),_.on("dragStart",function(e){e.nodes[0]}),this.setState({data:I,network:_}),_.enableEditMode()},fitScreen:function(){var e=D.getIds();_.fit({nodes:e,animation:!1})},setNodeInitialPosition:function(e){var t=this;if(console.log("try set node"),console.log(e),e!=[]){console.log("go set node"),this.setState({nodeInitialized:!0});var a=this.state;e.map(function(e,n){b.default.database().ref(t.state.courseID+"/_network/_concepts/"+e+"/x").once("value",function(t){if(console.log("x="+t.val()),!t.val()){var n=Math.floor(501*Math.random())-250,o=Math.floor(501*Math.random())-250;b.default.database().ref(a.courseID+"/_network/_concepts/"+e).update({x:n,y:o})}})})}},handleEdgeLabelValueChange:function(e){this.setState({edgeLabelValue:e.target.value})},handleConceptInputChange:function(e){this.setState({newConcept:e.target.value})},saveNewNode:function(e,t,a){if(void 0==e&&void 0==t&&void 0==a)var e=this.state.newConcept,t=this.state.newNodeData.x,a=this.state.newNodeData.y;if(e){var n=(0,k.searchFromArrayObject)("id",e,this.state.concepts);if(console.log("Search if there is a node, ID:"+n),""==n){console.log("add a new node "+e);var o=this.nodefire.push({id:e,word:e,x:t,y:a}).key;this.nodefire.child(o+"/who/"+this.state.user).update({count:1})}else console.log("add a duplicate node "+e),this.nodefire.child(n+"/who/"+this.state.user).update({count:1})}this.clearPopUp("addNode")},saveNewEdge:function(){var e=this.edgefire.push({from:this.state.newEdgeData.from,to:this.state.newEdgeData.to,dashes:!0}).key;b.default.database().ref(this.state.courseID+"/_network/_edges/"+e).update({id:e})},saveNewEdgeLabel:function(){b.default.database().ref(this.state.courseID+"/_network/_edges/"+this.state.selectedEdge).update({label:this.state.edgeLabelValue}),this.clearPopUp("editEdge"),this.props.sendLinkPhraseNotice(this.state.selectedEdge)},deleteNode:function(e){e&&_this.nodefire.child(e).remove()}},o(d,"updateConcept",function(e,t){(0,k.searchFromArrayObject)("id",e,this.state.concepts),this.nodefire.child(search_result).update(t)}),o(d,"clearPopUp",function(e){"addNode"==e?this.setState({newConcept:"",displayAddNodePopup:"none"}):"editEdge"==e&&this.setState({edgeLabelValue:"",displayEditEdgePopup:"none"})}),o(d,"changeEdgeToSolidLine",function(e){this.edgefire.child(e).update({dashes:!1})}),o(d,"render",function(){var e=this,t=this.state;return w.default.createElement("div",null,w.default.createElement("div",{id:"network",ref:function(t){e.container=t}},t.requests.map(function(e,t){return w.default.createElement("div",{style:{left:e.x,top:e.y,xIndex:2,position:"relative"}},w.default.createElement(f.default,{type:"exclamation-circle",style:{color:"red",width:80}}))})),w.default.createElement(s.default,{title:"Add a new node",id:"network-popUp",style:{display:this.state.displayAddNodePopup}},"Concept: ",w.default.createElement(u.default,{id:"concept-input",value:this.state.newConcept,placeholder:"new concept",onChange:function(t){return e.handleConceptInputChange(t)}}),w.default.createElement("div",{className:"center-container"},w.default.createElement(r.default,{type:"danger",size:"small",onClick:function(){return e.clearPopUp("addNode")}}," Cancel "),w.default.createElement(r.default,{type:"primary",size:"small",onClick:function(t){return e.saveNewNode()}}," Save "))),w.default.createElement(s.default,{title:"Edit Link phrase",id:"network-popUp",style:{display:this.state.displayEditEdgePopup}},w.default.createElement(u.default,{id:"edgeLabelInput",value:this.state.edgeLabelValue,placeholder:"link phrase",onChange:function(t){return e.handleEdgeLabelValueChange(t)}}),w.default.createElement("div",{className:"center-container"},w.default.createElement(r.default,{type:"danger",size:"small",onClick:function(){return e.clearPopUp("editEdge")}}," Cancel "),w.default.createElement(r.default,{type:"primary",size:"small",onClick:function(t){return e.saveNewEdgeLabel()}}," Save "))))}),d));t.default=P}});