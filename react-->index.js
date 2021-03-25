import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick'
import Root from './Root'
import './assets/styles/Base.css'
import uplusApi from './uPlusApi'
// import registerServiceWorker from './registerServiceWorker'

uplusApi.instance.initDeviceReady()

/* 防止点击穿透popover的mask */
FastClick.attach(document.body)
// import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
