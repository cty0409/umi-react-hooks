import React, { useReducer } from 'react'
import {initialState,reduer} from './reducer'
import {Button} from 'antd'
export default function UseReducer() {
  const [counter, dispatch] = useReducer(reduer, initialState);

  return (
    <div style={{ width: 200, margin: 'auto' }}>
      <div style={{ width: 40, margin: '100px auto', fontSize: 40 }}>{counter}</div>
      <Button onClick={() => dispatch('increment')}>递增</Button>
      <Button onClick={() => dispatch('decrement')}>递减</Button>
      <Button onClick={() => dispatch('reset')}>重置</Button>
    </div>
  )
}
