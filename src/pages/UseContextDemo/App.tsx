import {useContext, useState} from 'react'
import {context,Provider} from './Provider'
import Header from './Header'
import Page from './Page'
export default ()=>{
    const { tabindex} = useContext(context)
    console.log('tabindex',tabindex)
    return (<Provider>
        <div style={{marginTop:40}}>
        <Header/>
        <Page/>
    </div>
    </Provider>)
}