import {Badge} from 'antd';
import {context} from './Provider'
import {useContext} from 'react'
import Home from './Home'
import Hot from './Hot';
import Setting from './Setting';
export default ()=>{
  const { tabindex} = useContext(context)
  console.log('tabindex',tabindex)
  return (<div className="content_wrapper">
  {tabindex === 0 && (
    <Home />
  )}
  {tabindex === 1 && (
    <Hot />
  )}
  {tabindex === 2 && (
    <Setting />
  )}
</div>)
}