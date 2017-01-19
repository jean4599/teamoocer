import vis from 'vis'
import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import {toArray, retrieveData} from '../utils'
import {Row, Col, Button, Input, Dropdown, Menu, Icon} from 'antd'

  var options = {
  	layout: {
                    hierarchical: {
                        direction: "UD"
                    }
                },
    nodes:{
    	chosen:false,
    	shape: 'box'
    },
    interaction:{hover:true},
  };
  var nodes=[];
  var edges=[];
  var data={};
  var network={};
const ConceptMapping = React.createClass({
	getInitialState: function(){
		return {
			courseID: this.props.route.courseID,
      		courseURL: this.props.route.courseURL,
      		data:{},
      		mode: 'nomal',
      		concepts:{},
      		EdgeInputDisabled1:true,
      		EdgeInputDisabled2:true,
      		EdgeSubmitDisabled:true,
      		edgeIcons: ["ellipsis","minus","arrow-right"],
      		edgeLabelValue:'',
      		requests:[],
		}
	},
	componentDidMount: function(){
		this.fire = firebase.database().ref(this.state.courseID + '/_concepts')
		this.fire.on('value',this.updateConcept)
	},
	updateConcept: function(snapshot){
		nodes = retrieveData(snapshot.val(), 'id','label', 'level','id', 'word', 'level');
		console.log(nodes)
		nodes = new vis.DataSet(nodes);
		this.updateMap();
		this.setState({
			concepts: snapshot.val(),
		})
	},
	updateMap: function(){
		data={
			nodes: nodes,
			edges: edges
		}
		network = new vis.Network(this.container, data, options);
		network.on("selectNode", (params) =>{
	        var _ = this.state;
	        var word = _.concepts[ params['nodes'][0] ]['word']

	        switch(_.mode){
	        	case "Nomal":
	        		options.nodes.chosen = false;
	        		break;
	        	case "AddEdge_SelectFirstNode":
	        		options.nodes.chosen = true;
	        		this.setState({
	        			edgeInputValue1:word,
	        			firstNode: params, 
	        			mode: "AddEdge_SelectSecondNode",
	        			EdgeInputDisabled2:false
	        		})
	        		this.SecondNode.focus();
	        		break;
	        	case "AddEdge_SelectSecondNode":
	        		options.nodes.chosen = true;
	        		this.setState({
	        			edgeInputValue2: word,
	        			secondNode: params, 
	        			EdgeSubmitDisabled:false,
	        		})
	        }
	    });
	    network.on("hoverNode", function (params) {
	        console.log('hoverNode Event:', params);
	    });
	    network.on("hoverEdge", function (params) {
	        console.log('hoverEdge Event:', params);
	    });
	    network.on("selectEdge", (params)=>{
			var edgeId = params['edges'][0];
			console.log(edgeId)
			var nodes = network.getConnectedNodes(edgeId);
			var position = network.getPositions(nodes);
			console.log(position)
			var keys = Object.keys(position)
			var node1 = network.canvasToDOM(position[keys[0]]);			
			var node2 = network.canvasToDOM(position[keys[1]]);
			var x = (node1.x+node2.x)/2;
			var y = (node1.y+node2.y)/2;
			console.log(x+' '+y)
			
			var request = {x: x, y: y, content: 'a reqest'}
			var requests = this.state.requests;
			requests.push(request)
			this.setState({
				requests: requests,
			})
			console.log(requests)
	    });
		this.setState({
			data: data,
			network: network
		})
	},
	addEdge: function(when){
		if(when=='start'){
			this.setState({
				mode: "AddEdge_SelectFirstNode",
				EdgeInputDisabled1:false,
				EdgeInputDisabled2:false,
			})
			this.FirstNode.focus();	
		}
		else if(when=='finish'){
			var edgetype = this.state.edgeIcons[2];
			var edgelabel = this.state.edgeLabelValue;
			try {
				if(edgetype=='ellipsis'){
					edges.push({
	                    id: Math.floor((Math.random() * 1000) + 1),
	                    from: this.state.firstNode.nodes[0],
	                    to: this.state.secondNode.nodes[0],
	                    dashes: true,
	                    label: edgelabel,
               		});
				}else if(edgetype=='arrow-right'){
					edges.push({
	                    id: Math.floor((Math.random() * 1000) + 1),
	                    from: this.state.firstNode.nodes[0],
	                    to: this.state.secondNode.nodes[0],
	                    arrows: 'to',
	                    label: edgelabel,
	                });
				}else {
					edges.push({
	                    id: Math.floor((Math.random() * 1000) + 1),
	                    from: this.state.firstNode.nodes[0],
	                    to: this.state.secondNode.nodes[0],
	                    label: edgelabel,
	                });
				}
				this.setState({edges: edges})
            }
            catch (err) {
                alert(err);
            }
            this.setState({
            	EdgeInputDisabled1:true,
            	EdgeInputDisabled2:true,
            	EdgeSubmitDisabled:true,
            	edgeInputValue1:'',
            	edgeInputValue2:'',
            	edgeLabelValue:'',
            	mode:"Nomal",
            })
            this.updateMap();
		}
	},
	handleMenuClick: function(e){
		var edgeIcons = this.state.edgeIcons;
		var index = edgeIcons.indexOf(e.key);
		edgeIcons.splice(index,1);
		edgeIcons.push(e.key)

		this.setState({edgeIcons:edgeIcons})
	},
	handleEdgeLabelValueChange: function(e){
		this.setState({
			edgeLabelValue: e.target.value,
		})
	},
	render: function(){
		var _ = this.state;
		const menu = (
		  <Menu onClick={(e)=>this.handleMenuClick(e)}>
		    <Menu.Item key={_.edgeIcons[0]}><Icon type={_.edgeIcons[0]} /></Menu.Item>
		    <Menu.Item key={_.edgeIcons[1]}><Icon type={_.edgeIcons[1]} /></Menu.Item>
		  </Menu>
		);
		return (
			<div>
				<Row type="flex" justify="space-around" align="middle">
					<Col span={2}><Button onClick={()=>this.addEdge('start')}>Add Edge</Button></Col>
					<Col span={5}><Input ref={(input) => { this.FirstNode = input;}} onFocus={()=>{this.setState({mode: 'AddEdge_SelectFirstNode'})}} addonBefore="From" disabled={_.EdgeInputDisabled1} placeholder={"click the starting node"} value={_.edgeInputValue1}/></Col>
					<Col span={1}><Dropdown.Button overlay={menu} disabled={_.EdgeInputDisabled1} size='large'>
								        <Icon type={_.edgeIcons[2]} />
								    </Dropdown.Button></Col>
					<Col span={5}><Input ref={(input) => { this.SecondNode = input;}} onFocus={()=>{this.setState({mode: 'AddEdge_SelectSecondNode'})}} addonBefore="To" disabled={_.EdgeInputDisabled2} placeholder={"click the ending node"} value={_.edgeInputValue2}/></Col>
					<Col span={6}><Input addonBefore="relation" onChange={(e)=>this.handleEdgeLabelValueChange(e)} placeholder={"the derected relation between two nodes"} disabled={_.EdgeInputDisabled2} value={_.edgeLabelValue}/></Col>
					<Col span={2}><Button onClick={()=>this.addEdge('finish')} htmlType='submit' disabled={_.EdgeSubmitDisabled}>Finish</Button></Col>
				</Row>
				<div ref={container=>{this.container = container}}>
				{_.requests.map((request,index)=>{
					console.log(request.x)
					return (
						<div style={{left: request.x, top: request.y, xIndex: 2, position: 'relative'}}>
							<Icon type="exclamation-circle" style={{color: 'red', width: 80}}/>
						</div>
					)
				})}
				</div> 
			</div>
			)
	}
})
export default ConceptMapping