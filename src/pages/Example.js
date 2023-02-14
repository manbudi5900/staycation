import React, {Component} from 'react'
import InputDate from 'elements/Form/InputDate'

import InputNumber from 'elements/Form/InputNumber'


export default class LandingPage extends Component {
    state = {
        value: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection"
        }
      };
    
      handleChange = e => {
        this.setState({ value: e.target.value });
      };
      handleChange1 = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
  render(){
    return(
      <>
        <InputDate
        max={30}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
      <InputNumber
        max={30}
        onChange={this.handleChange1}
        name="value"
        value={this.state.value}
      />
        
      </>
    )
  }
}
