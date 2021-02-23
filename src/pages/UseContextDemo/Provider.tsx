import  {createContext, Dispatch, ReactNode, useState} from 'react'

interface Injected{
  unreadIndex:number,
  setunreadIndex:Dispatch<any>,
  unreadhot:number,
  setunreadhot:Dispatch<any>,
  tabindex:number,
  settabindex:Dispatch<any>
}

export const context = createContext<Injected>({} as Injected)
interface Props{
  children?:ReactNode
}
export function Provider({children}:Props){
  const [unreadIndex,setunreadIndex] = useState(0)
  const [unreadhot,setunreadhot] = useState(0)
  const [tabindex,settabindex] = useState(0)

  const value ={
    unreadIndex,
    setunreadIndex,
    unreadhot,
    setunreadhot,
    tabindex,
    settabindex
  }
  return (
    <context.Provider value={value}> {children}</context.Provider>
  )
}