import React,{useState,useEffect} from 'react'

const Counter = (props) => {
  const [count,setCount] = useState(0)

  useEffect(() => {
    // console.log('indie this counter',props.number)
  },[count])

  const handleChange = (operation) => {
    if(operation == 'plus') {
      setCount(count+1)
      props.sum(1)
    } else {
      setCount(count-1)
      props.sum(-1)
    }
  }

  return (    <>
    <h3><b>Counter {props.number}</b></h3>
    {count} &nbsp;
    <button onClick={(e) =>handleChange('plus')}>+</button>
    <button onClick={(e) =>handleChange('minus')}>-</button>
  </>)
}

export default Counter;