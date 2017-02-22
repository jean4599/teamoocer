import React from 'react'
import ConceptExtraction from './ConceptExtraction'
import ConceptMapping from './ConceptMapping'
import ConceptMapInformation from './ConceptMapInformation'
import {Row, Col} from 'antd'
import Scroll from 'react-scroll'

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

const Main = React.createClass({
	getInitialState: function(){
		return {
			courseID: this.props.params.courseID,
			courseURL: this.props.route.courseURL,
		}
	},
	componentDidMount: function() {

	    Events.scrollEvent.register('begin', function(to, element) {
	      console.log("begin", arguments);
	    });

	    Events.scrollEvent.register('end', function(to, element) {
	      console.log("end", arguments);
	    });

	    scrollSpy.update();

	  },
	componentWillUnmount: function() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	},
	scrollToTop: function() {
    scroll.scrollToTop();
  },
	render: function(){
		return (
				<div>
					<Element name="video" className="element">
			          	<div style={{padding: '10 50', backgroundColor: '#e9e9e9', height: '80%' }}><ConceptExtraction courseURL={this.state.courseURL} courseID={this.state.courseID}/></div>
			        </Element>

					<Link activeClass="active" to="tutorial" spy={true} smooth={true} offset={50} duration={500} >
			          <Row style={{backgroundColor: '#e9e9e9'}} ><Col className='half-circle-up center'>Go discussion</Col></Row>
			        </Link>

			        <Element name="discussion" className="element">
						<Link activeClass="active" onClick={this.scrollToTop} spy={true} smooth={true} offset={50} duration={500} >
				          <Row style={{backgroundColor: '#e9e9e9', height: '15%'}} ><Col className='half-circle-down center' style={{backgroundColor: '#F25F5C'}}>Review video</Col></Row>
				        </Link>
			        	<div style={{padding: '0 50', backgroundColor: '#e9e9e9', height: '90%' }}><ConceptMapping courseURL={this.state.courseURL} courseID={this.state.courseID}/></div>
			        </Element>
			        
			        <Element name='tutorial' className='element'>
			        	<div style={{padding: '10 50', backgroundColor: 'white', height: '80%' }}><ConceptMapInformation /></div>
				        <Link activeClass="active" to="discussion" spy={true} smooth={true} offset={0} duration={500} >
					          <Row style={{backgroundColor: 'white'}} ><Col className='half-circle-up center' style={{backgroundColor: '#FFE066'}}>Start!</Col></Row>
				        </Link>
			        </Element>
					
				</div>
			)
	}
})
export default Main