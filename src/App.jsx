
/* Game

   -> Board 
    -> Square 
 -> Board  

*/

import { useState } from 'react';

function Square({value , onSquareClick}){ 

  return(
    <button className="border border-gray-600 w-12 h-12 m-1" 
          onClick={onSquareClick}
    >{value}</button>
  );
}



export default function Board(){

  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  

  function clickHandle(i) {
    if(square[i]) {
      return;
    }

    const nextSuare = square.slice();
    

    if (xIsNext) {
      nextSuare[i] = "X";
    } else {
      nextSuare[i] = "0";
    }
    
    setSquare(nextSuare);
    setXIsNext(!xIsNext);
  }

    return (
        <>
        <div className="flex">
          <Square value={square[0]} onSquareClick={ () => clickHandle(0)}/>
          <Square value={square[1]} onSquareClick={ () => clickHandle(1)}/>
          <Square value={square[2]} onSquareClick={ () => clickHandle(2)}/>
        </div>
        <div className="flex">
          <Square value={square[3]} onSquareClick={ () => clickHandle(3)}/>
          <Square value={square[4]} onSquareClick={ () => clickHandle(4)}/>
          <Square value={square[5]} onSquareClick={ () => clickHandle(5)}/>
        </div>
        <div className="flex">
          <Square value={square[6]} onSquareClick={ () => clickHandle(6)}/>
          <Square value={square[7]} onSquareClick={ () => clickHandle(7)}/>
          <Square value={square[8]} onSquareClick={ () => clickHandle(8)}/>
        </div>
        </>
    );
}