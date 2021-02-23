import {Badge} from 'antd';
import {context} from './Provider'
import {useContext} from 'react'


export default ()=>{
  const {unreadIndex, unreadhot,settabindex} = useContext(context)
  return <div>
        <Badge count={unreadIndex} >
          <div onClick={() => settabindex(0)} style={{ marginLeft: 42 }}>首页</div>
        </Badge>
        <Badge count={unreadhot} >
          <div onClick={() => settabindex(1)} style={{ marginLeft: 42 }}>热门</div>
        </Badge>
        <Badge >
         <div onClick={() => settabindex(2)} style={{ marginLeft: 42 }}>设置</div>
        </Badge>
      </div>
}