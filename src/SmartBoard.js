import React, { useState } from "react";
import Chessground from "react-chessground";
import Chess from "chess.js";

const SmartBoard = () => {
  const [chess] = useState(new Chess());
  const [fen, setFen] = useState(chess.fen());

  const onMove = (from, to) => {
    const move = chess.move({
      from,
      to,
      promotion: "q", //Promote pawn to queen for simplicity
    });

    if (!move) return;

    setFen(chess.fen());
  };

  const getTurnColor = () => {
    return chess.turn() === "w" ? "white" : "black";
  };

  const getMovable = () => {
    const dests = new Map();
    chess.SQUARES.forEach(s => {
      const ms = chess.moves({ square: s, verbose: true });
      if (ms.length)
        dests.set(
          s,
          ms.map(m => m.to)
        );
    });

    return {
      free: false,
      dests,
      color: getTurnColor(),
    };
  };

  return (
    <Chessground
      fen={fen}
      movable={getMovable()}
      turnColor={getTurnColor()}
      onMove={onMove}
    />
  );
};

export default SmartBoard;
