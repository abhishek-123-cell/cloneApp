import React, { Component } from 'react'
import { MainContainer, Sidebar } from '.'

export default class Slack extends Component {
         render() {
                  return (
                    <div id="slack">
                    <Sidebar/>
                    <MainContainer/>
                    </div>
                  );
         }
}
