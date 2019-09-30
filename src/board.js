import React,{Component} from 'react';
import './App.css';
import Square from './square'
import PropTypes from 'prop-types'
class Board extends Component{
    static contextTypes = {
        gameArray : PropTypes.array,
        _handleClick : PropTypes.func,
        
    }
  constructor(){
    super()

  }
  _getSquare(i){
   let {_handleClick,gameArray} = this.context
    gameArray = gameArray[gameArray.length-1]
      return (
      <Square index = {gameArray[i]} _handleClick ={()=>_handleClick(i)}></Square>
      )
  }
  render(){
    return (
      <div className="board-box">
          {this._getSquare(0)}
          {this._getSquare(1)}
          {this._getSquare(2)}
          {this._getSquare(3)}
          {this._getSquare(4)}
          {this._getSquare(5)}
          {this._getSquare(6)}
          {this._getSquare(7)}
          {this._getSquare(8)}
      </div>
    )
  }
}

export default Board;