import React, { useContext } from 'react';
import {  Slider } from 'antd';
import {context} from './Provider';

export default function Setting() {
  const {unreadIndex, unreadhot,setunreadIndex, setunreadhot} = useContext(context);
  return (
    <div >
       <div>首页未读  {unreadIndex}</div>
       <div>
       <Slider
          onChange={(value:number)=>{
            setunreadIndex(value)
          }}
        />
       </div>
        
      <div>热门未读  {unreadhot}</div>
      <div>
      <Slider
        onChange={(value:number)=>{
          setunreadhot(value)
        }}
      />
      </div>

    </div>
  )
}
