import React, { memo, useCallback, useState, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import moment from 'moment'
import './style.css';
import Counter from './counter'

const App = () => {
  const [sum,setsum] = useState(0)
  const handleSum = (val) => {
    setsum(sum+val)
  }

  return (
    <>
      <Counter number='1' sum={handleSum}/>
      <hr/>
      <Counter number='2' sum={handleSum}/>
      <hr/>
      <Counter number='3'  sum={handleSum}/>
      <hr/>
      <b>Sum of counts</b> {sum}
    </>
  )
}

render(<App />, document.getElementById('root'));
