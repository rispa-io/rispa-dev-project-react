// import BaseComponent from './containers/BaseComponent/BaseComponent'
import reducer, { actionLoop } from './redux/items'
import { match } from '@rispa/redux'

import Main from './containers/Main/Main'

const registerReducer = store => {
  store.injectReducer(reducer.KEY, reducer)

  store.dispatch(actionLoop())
}

const registerWhen = when => {
}

const registerModule = context => {
  registerReducer(context.store)
  registerWhen(context.when)

  return Main
}

export default registerModule
