import React, {Component} from 'react'
import Header from 'elements/parts/Header'

export default class LandingPage extends Component {
  render(){
    return(
      <>
        <Header {...this.props}> </Header>
      </>
    )
  }
}
