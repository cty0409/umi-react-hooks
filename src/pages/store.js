import { useEffect, createContext } from 'react';
import Reducer from './reducer'

export const AppContext = createContext()
export function Store(props) {

    const { book, dispatch } = Reducer()

    console.log('哈哈哈哈，')
    // console.log(dispatch)

    useEffect(() => {
        dispatch({
            type: 'save',
            name: '六级'
        })
        dispatch({
            type: 'add',
            count: 666
        })
    }, [])

    return (
        <AppContext.Provider value={{ book, dispatch }}>
            {props.children}
        </AppContext.Provider>
    )
}


