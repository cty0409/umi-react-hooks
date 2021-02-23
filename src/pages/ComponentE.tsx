import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import { Button } from 'antd-mobile';
import { context } from './Provider';
import {UserContext, AgeContext} from './index'

function ComponentE() {
  const user = useContext(UserContext)
  const age = useContext(AgeContext)
  const { reset } = useContext(context);
  
  return (
    <div>
      <ComponentF />
      <Button onClick={reset}>重置</Button>
      {user} - {age}
    </div>
  )
}

export default ComponentE

