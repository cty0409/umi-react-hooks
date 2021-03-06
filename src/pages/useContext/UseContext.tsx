import React,{createContext} from 'react'
import ComponentC from './ComponentC'
import { CounterProvider } from './Provider';
export const UserContext = createContext('')
export const AgeContext = createContext('')

const UseContext = () => {
  return (
    <CounterProvider>
     <ComponentC />
    </CounterProvider>
  )
}

export default UseContext
