import React, { useContext } from 'react';
import { Button } from 'antd-mobile';
import { context } from './Provider';
export default () => {
  const { counter = 0, increment, decrement } = useContext(context);
  return (
    <div style={{ width: '200px', margin: 'auto' }}>
      <div style={{ width: '40px', margin: '100px auto', fontSize: '40px' }}>{counter}</div>
      <Button onClick={increment}>递增</Button>
      <Button onClick={decrement}>递减</Button>

    </div>
  );
}
