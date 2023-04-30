import React, {useState} from 'react';
import './calculator.css';


const Calculator = () => {


  const [input, setInput] = useState('');
  const [prevInput, setPrevInput] = useState('');
  const [theme, setTheme] = useState('dark');
  
  
  const ops = ['+','-','*','/','.']
  
  function handleClick(value){
    
    if (
      (ops.includes(value) && input === '') ||
      (ops.includes(value) && ops.includes(input.slice(-1)))
      ) return;
  
    setInput(input + value);
    setPrevInput(eval(input + value).toString())
    // setPrevInput(Function('return' + input + value)());
  }

  function handleDel(){
    
    if (input === '') return;
  
    const delValue = input.slice(0,-1);
    
    setInput(delValue);
    setPrevInput(eval(delValue))
    
    if (delValue === '') setPrevInput('');
  }

  function handleClear() {
    setInput('');
    setPrevInput('');
  }

  function handleEqual() {
    if (input === '') return;

    setInput(eval(input).toString());
    setPrevInput('');
  }

  function handleTheme() {
    setTheme((prev)=>prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <h1>Calculator</h1>
      <div className={`container ${theme}`}>
          <div className='output'>
            <div>{prevInput}</div>
            <div>{input}</div>
          </div>
          <div className='wrapper'>
              <button type="button" disabled={input === ""} onClick={handleClear} className='gray'>C</button>
              <button type="button" onClick={()=>{handleClick('(')}} className='gray'>(</button>
              <button type="button" onClick={()=>{handleClick(')')}} className='gray'>)</button>
              <button type="button" disabled={input === ""} onClick={handleDel} className={`${theme === 'dark'? 'orange' : 'gray'}`} >DEL</button>  
          </div>
          <div className='wrapper'>
              <button type="button" onClick={()=>{handleClick('7')}} className={`${theme === 'light'?'blue':''}`} >7</button>
              <button type="button" onClick={()=>{handleClick('8')}}>8</button>
              <button type="button" onClick={()=>{handleClick('9')}}>9</button>
              <button type="button" onClick={()=>{handleClick('*')}} className={`${theme === 'dark'? 'orange' : 'gray'}`} >x</button>
          </div>
          <div className='wrapper'>
              <button type="button" onClick={()=>{handleClick('4')}}>4</button>
              <button type="button" onClick={()=>{handleClick('5')}}>5</button>
              <button type="button" onClick={()=>{handleClick('6')}}>6</button>
              <button type="button" onClick={()=>{handleClick('-')}} className={`${theme === 'dark'? 'orange' : 'gray'}`} >-</button>
          </div>
          <div className='wrapper'>
              <button type="button" onClick={()=>{handleClick('1')}}>1</button>
              <button type="button" onClick={()=>{handleClick('2')}}>2</button>
              <button type="button" onClick={()=>{handleClick('3')}}>3</button>
              <button type="button" onClick={()=>{handleClick('+')}} className={`${theme === 'dark'? 'orange' : 'gray'}`} >+</button>
          </div>
          <div className='wrapper'>
              <button type="button" onClick={()=>{handleClick('0')}}>0</button>
              <button type="button" onClick={()=>{handleClick('.')}}>.</button>
              <button type="button" onClick={()=>{handleClick('/')}}>/</button>
              <button type="button" onClick={handleEqual} className={`${theme === 'dark'? 'orange' : 'gray'}`}>=</button>
          </div>
      </div>
      <button onClick={handleTheme}>theme</button>
    </div>
  )
}

export default Calculator