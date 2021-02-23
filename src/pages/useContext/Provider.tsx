import React, { createContext, ReactNode, useState, Dispatch } from 'react';

interface Injected {
  counter: number,
  setCounter: Dispatch<any>,
  increment: () => any,
  decrement: () => any,
  reset: ()=>any
}

export const context = createContext<Injected>({} as Injected);

interface Props {
  children?: ReactNode
}

export function CounterProvider({ children }: Props) {
  const [counter, setCounter] = useState(0);

  const value = {
    counter,
    setCounter,
    increment: () => setCounter(counter + 1),
    decrement: () => setCounter(counter - 1),
    reset:() => setCounter(0)
  }

  return (
    < context.Provider value={value}>{children}</context.Provider>
  )
}
