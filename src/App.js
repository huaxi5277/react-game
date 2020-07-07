import React, { Component } from 'react';
import './App.css';
import Board from './board'
import PropTypes from 'prop-types'
import History from './history'
class Game extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="wrap">
        <Board></Board>
        <hr />
        <History></History>
      </div>
    )
  }
}
class App extends Component {
  static childContextTypes = {
    gameArray: PropTypes.array,
    _handleClick: PropTypes.func,
    isRenderX: PropTypes.bool,
    _checkGame : PropTypes.func,
    winer : PropTypes.bool,
    _historyHandleClick : PropTypes.func
  }
  getChildContext() {
    return {
      gameArray: this.state.gameArray,
      _handleClick: (i) => { this._handleClick(i) },
      isRenderX: this.state.isRenderX,
      _checkGame : (result)=>{this._checkGame(result)},
      winer : this.state.winer,
      _historyHandleClick : (index)=>{this._historyHandleClick(index)}
    }
  }
  // 胜利条件的判断
  _checkGame(result) {
    var status = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < status.length; i++) {
      const[a,b,c] = status[i]
      if (result[a] != null && result[a] == result[b] && result[b] == result[c]) {
        return result[a]
      }
    }
    return false
  }
  constructor() {
    super()
    this.state = {
      gameArray: [Array(9).fill(null)],
      isRenderX: true,
      winer  : false,
      
    }
  }
  _historyHandleClick(index){
    let arr = this.state.gameArray.slice(0,index)
    this.setState({
      gameArray : arr
    })
 
  }
  _handleClick(i) {
    
    let { gameArray } = this.state
    let res = gameArray[gameArray.length-1]
    // res = 数组的最后一项   
    if(res[i]){
      return 
    } 
    if(this._checkGame(res)){
      return 
    }
    if (this.state.isRenderX) {
      let game = Array(9).fill(null)
      let arr = gameArray[gameArray.length - 1]
      for (let k = 0; k < arr.length; k++) {
        game[k] = arr[k]
      }
      game[i] = "X"
      gameArray.push(game)
    }
    else {
      let game = Array(9).fill(null)
      let arr = gameArray[gameArray.length - 1]
      for (let k = 0; k < arr.length; k++) {
        game[k] = arr[k]
      }
      game[i] = "O"
      gameArray.push(game)

    }
    
     var newRes = gameArray[gameArray.length-1]
    this.setState({
      isRenderX: !this.state.isRenderX,
      gameArray: gameArray,
      winer : !!this._checkGame(newRes)
    
    })
  }
  render() {
    return (
      <div>
<     h1>这是一个五子棋游戏</h1>
      <h2>这是一个好玩的五子棋游戏啊</h2>
      <Game></Game>
      </div>
    )
  }
}

export default App;
