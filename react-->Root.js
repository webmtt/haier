import React, { Suspense } from 'react'
import { Router } from 'react-router-dom'
import { createHashHistory } from 'history'
import { Provider } from 'mobx-react'
import stores from '../store'
import App from './App'

const history = createHashHistory()

const Root = () => {
  return (
    <Provider {...stores}>
      <Router history={history} hashType='noslash'>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </Router>
    </Provider>
  )
}

export default Root
