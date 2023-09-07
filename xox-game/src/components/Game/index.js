import React, { useState } from "react";
import "./style.css";
import Box from "./Box";
import { GiTrophyCup } from "react-icons/gi";

const board = [[], [], []];

function Game() {
  const [turn, setTurn] = useState("X");
  const [winningText, setWinningText] = useState("");
  const [xoxGame, setXoxGame] = useState("XOX GAME");

  function changeTurn(row, col) {
    board[row][col] = turn;
    setTurn((turn) => (turn === "X" ? "0" : "X"));

    const winner = checkForWin();
    if (!winner) {
      {
        setXoxGame(xoxGame);
      }
    } else {
      setWinningText(winner + " won!");
    }
  }

  function checkForWin() {
    for (let i = 0; i < board.length; i++) {
      const col = board[i];
      if (col[0] === col[1] && col[1] === col[2] && col[0]) {
        return col[0];
      }
    }
    for (let i = 0; i < board.length; i++) {
      const row1 = board[0][i];
      const row2 = board[1][i];
      const row3 = board[2][i];

      if (row1 == row2 && row2 == row3 && row1) {
        return row1;
      }
    }

    const d1 = board[0][0];
    const d2 = board[1][1];
    const d3 = board[2][2];
    if (d1 === d2 && d2 === d3 && d1) {
      return d1;
    }

    const p1 = board[0][2];
    const p2 = board[1][1];
    const p3 = board[2][0];
    if (p1 === p2 && p2 === p3 && p1) {
      return p1;
    }
  }

  return (
    <div id="game">
      <div id="winning-text">
        {winningText} <br /> {xoxGame}
      </div>
      <div id="winning-text2">
        {winningText} <br /> {xoxGame}
      </div>

      <div className="row">
        <Box row={0} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box row={1} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box row={2} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <button>
        <a href="/">Again</a>
      </button>
    </div>
  );
}

export default Game;
