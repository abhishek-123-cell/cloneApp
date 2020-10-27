// import './App.css';
import React,{Component} from 'react';
import {SignIn,Slack} from './';
import {Switch,Route} from 'react-router-dom';
// import { Switch, Route } from "react-router-dom";

function Home(){
  return(
    <div>Home</div>
  )
}
function some() {
  return(
   <div>Some</div>
  )
}





export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/main" component={Slack} />
        </Switch>
      </div>
    );
  }
}
