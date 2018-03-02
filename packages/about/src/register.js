// import BaseComponent from './containers/BaseComponent/BaseComponent'
import reducer, { actionLoop } from './redux/items'
// import { match } from '@rispa/redux'

import About from './containers/About/About'

const registerReducer = store => {
  store.injectReducer('dsadasdas', reducer)

  store.dispatch(actionLoop())
}

const registerWhen = when => {
}

const registerModule = context => {
  registerReducer(context.store)
  registerWhen(context.when)

  return About
}

export default registerModule
