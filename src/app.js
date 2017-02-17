import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'
import {IndexRoute, Router, Route, browserHistory} from 'react-router'
import conceptExtraction from './components/ConceptExtraction'
import conceptAggregation from './components/ConceptAggregation'
import conceptMapping from './components/ConceptMapping'
import IndexView from './components/IndexView'
import NotFoundView from './components/NotFoundView'
import { Layout } from 'antd';
import style from './app.css'

const { Header, Footer, Sider, Content } = Layout;


//Initialize firebase
var config = {
apiKey: "AIzaSyBo2N9-5K_ez1rqOm5oboQa2DauulGwFHI",
authDomain: "ccmap-1b218.firebaseapp.com",
databaseURL: "https://ccmap-1b218.firebaseio.com",
storageBucket: "ccmap-1b218.appspot.com",
messagingSenderId: "311008823460"
};

firebase.initializeApp(config);
//UI template
const T = React.createClass({
	render(){
		return (
		 <Layout>
		    <Header></Header>
		    <Content style={{ padding: '50px 50px', backgroundColor: 'white' }}>{this.props.children}</Content>
		  </Layout>
		)
	}
})
var courseURL = "https://www.youtube.com/watch?v=4Z9KEBexzcM";
var courseID = "p4XTMvagQ2Q"

ReactDOM.render(
	<Router history={browserHistory}>
    <Route path="/" component={T}>
        <IndexRoute component={IndexView}/>
        <Route courseURL={courseURL} courseID={courseID} path='conceptExtraction' component={conceptExtraction} />
        <Route courseURL={courseURL} courseID={courseID} path='conceptAggregation' component={conceptAggregation} />
        <Route courseURL={courseURL} courseID={courseID} path='conceptMapping' component={conceptMapping} />
        <Route path="*" component={NotFoundView}/>
    </Route>
  </Router>,
  document.getElementById('container')
);