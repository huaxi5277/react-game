import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
class History extends Component {
  static contextTypes = {
    isRenderX: PropTypes.bool,
    winer: PropTypes.bool,
    gameArray: PropTypes.array,
    _historyHandleClick :PropTypes.func
  }
  constructor() {
    super()
  }
  render() {
    let { isRenderX, winer, gameArray,_historyHandleClick } = this.context

    return (
      <div className="history-box">
        <div>
          <p style={winer == false ? { display: "block" } : { display: "none" }} > next is {isRenderX == true ? "X" : "O"}</p>
          <p style={winer == false ? { display: "none" } : { display: "block" }}>
            {winer == false ? "y" : `Winer is ${isRenderX == true ? "O" : "X"}`}</p>

        </div>
        <hr />
        <p>历史记录</p>
        <ul>
        {
          gameArray.map((item,index)=>{
            if(index == 0) return 
            return (
              <li key = {index}>
                <button type="button" onClick= {()=>{
                    _historyHandleClick(index)
                }} >step  {index} </button>
                <br />
              </li>
              
            )

          })
        }


        </ul>
      </div>
    )
  }
}
export default History