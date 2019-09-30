import React,{Component} from 'react';
import './App.css';
import PropTyps from 'prop-types'
class Square extends Component{
    constructor(){
        super()
    }
  render(){
      return (
          <div className="box" onClick = {()=>this.props._handleClick()} >{this.props.index}</div>
      )
  }
}
export default Square