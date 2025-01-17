import { useState } from "react";
import cls from './Counter.module.scss';

export const Counter = ()=>{
  const [count, setCount] = useState(0)
  const increment = ()=>{
    setCount(count + 1)
  }
    
  return (
    <div>
      <h1 className={cls.title}>{count}</h1>
      <button className={cls.btn} onClick={increment}>Add</button>
    </div>
  )
}