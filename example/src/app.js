import React from 'react'
import { render } from 'react-dom'
// import MuxinHeader from '../../src' // 引入组件
import MuxinHeader from 'muxin-header'
import 'muxin-header/lib/main.min.css'

const App = () => <MuxinHeader avator="" />
render(<App />, document.getElementById('root'))
