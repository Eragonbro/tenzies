import React from 'react'
import Button from "./Components/Button"

import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

import './App.css'

function App() {
  console.log("App is rendering");
  
    let [tenButtonsState, setTenButtonsState] = React.useState(
      Array.from({length: 10}, (_, i)=> ({
          id: i,
          value: Math.floor(Math.random() * 6) + 1,
          isFrozen: false
      } ))
    ) 

    //GENERATE RANDOM NUMBERS FOR BUTTONS THAT AREN'T FROZEN
    const generateNewRandomNumbers = () =>{
      
      setTenButtonsState(prev=> (prev.map(
        (item) => (item.isFrozen? item : {...item, value: Math.floor(Math.random() * 6) + 1})
                                        )
                                )
                        );
      }

    //FREEZE A BUTTON
    const handleFreeze = (id) => {
        console.log(`button of id ${id} clicked`)
        setTenButtonsState(prev=>prev.map( (item)=>(item.id === id ? {...item,isFrozen: !item.isFrozen} : item) ))
    }

    let tenButtons = tenButtonsState.map((item)=>
      <Button 
        key = {item.id}
        id = {item.id}
        randomNumber = {item.value}
        isFrozen = {item.isFrozen}
        // onClick={()=>console.log(item.id)}
        onClick={()=>handleFreeze(item.id)}
      />
    )

    console.log(tenButtonsState);

    
    const allFrozen = tenButtonsState.every(buttonState => buttonState.isFrozen);
    const allTheSame = tenButtonsState.every(buttonState => buttonState.value === tenButtonsState[0].value);
    
    const { width, height } = useWindowSize()

   
  
  return (
    <>
      <div className='card'>
        
        <div className='instructions'>
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
        </div>

        <div className='dice'>
          {tenButtons}
        </div>  
      
        <button className='rollButton' onClick={generateNewRandomNumbers}>Roll</button>

        {allFrozen && allTheSame && <Confetti
            width={width}
            height={height}
            />}
        
      </div>  
    </>
  )
}

export default App
