import React from "react";
import Board from "./Board";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatusHistories: [{
        squares: Array(9).fill(null),
        nextPlayer: "x"
      }]
    };
    this.onSquareClick = this.onSquareClick.bind(this);
  }

  onSquareClick(idx) {
    // 最新的游戏状态
    let latestStatusIdx = this.state.gameStatusHistories.length - 1;
    let latestStatus = this.state.gameStatusHistories[latestStatusIdx];
    // 获取方格
    let squares = latestStatus.squares.slice();
    // 检测方格是否为空
    if (["x", "o"].indexOf(squares[idx]) >= 0) {
      return; // 为空说明重复点击
    }

    let nextPlayer = latestStatus.nextPlayer;
    squares[idx] = nextPlayer;
    this.setState(
      {
        gameStatusHistories: this.state.gameStatusHistories.concat({
          squares: squares,
          nextPlayer: nextPlayer === 'x' ? 'o' : 'x'
        })
      },
      () => this.calcResult()
    );
  }

  calcResult() {
    // 最新的游戏状态
    let latestStatusIdx = this.state.gameStatusHistories.length - 1;
    let latestStatus = this.state.gameStatusHistories[latestStatusIdx];
    // todo 检查是否满足成功条件
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board gameStatus={this.state.gameStatusHistories[this.state.gameStatusHistories.length - 1]}
                 onSquareClick={this.onSquareClick}
          />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
