// import BaseComponent from './containers/BaseComponent/BaseComponent'
// import reducer, { action } from './redux/reducer'
// import { match } from '@rispa/redux'

import About from './containers/About/About'

const registerReducer = () => {
  // store.injectReducer('reducerName', reducer)
}

const registerWhen = () => {
  // when(match('/'), action)
}

const registerModule = context => {
  registerReducer(context)
  registerWhen(context)

  return About
}

export default registerModule
