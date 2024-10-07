
/* Game

   -> Board 
    -> Square 
 -> Board  

*/
import { useState } from 'react';

function Square({value, onSquaredClick}) {


  return (
  <button
  className='border-gray-500 h-12 w-12 m-1 text-lg bg-white border'
  onClick= {onSquaredClick}> 
    {value}
    </button>
  );
}

export default function Board(){

  const [squares, setSquares] =  useState(Array(9).fill(null));
  const [xIsnext, setXIsnext] = useState(true);

  function handClieck(i) {

    if (squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    if(xIsnext){
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsnext(!xIsnext);
  }
  
    return (
      <>
      <div className='flex'>
        <Square value={squares[0]} onSquaredClick ={() => handClieck(0)}/>
        <Square value={squares[1]} onSquaredClick ={() => handClieck(1)}/>
        <Square value={squares[2]} onSquaredClick ={() => handClieck(2)}/>
   
      </div>
      <div className='flex'>
        <Square value={squares[3]} onSquaredClick ={() => handClieck(3)}/>
        <Square value={squares[4]} onSquaredClick ={() => handClieck(4)}/>
        <Square value={squares[5]} onSquaredClick ={() => handClieck(5)}/>
   
      </div>
      <div className='flex'>
        <Square value={squares[6]} onSquaredClick ={() => handClieck(6)}/>
        <Square value={squares[7]} onSquaredClick ={() => handClieck(7)}/>
        <Square value={squares[8]} onSquaredClick ={() => handClieck(8)}/>
   
      </div>
      
      </>
        
    );
}