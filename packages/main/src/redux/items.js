import { createAction, createReducer } from 'redux-act'
import { loop, Cmd } from '@rispa/redux'

const initialState = {

}

export const action = createAction('items/ACTION')
export const actionLoop = createAction('items/LOOP')

export const handleAction = (state, payload) => loop({
  ...state
}, Cmd.none)

export const handleLoopAction = (state, payload) =>
  loop(
    {
      ...state,
    },
    Cmd.run(() => Promise.resolve(), {
      successActionCreator: action,
      args: ['123']
    })
  )

const reducer = createReducer(on => {
  on(action, handleAction)
  on(actionLoop, handleLoopAction)
}, initialState)

reducer.KEY = 'items'

export default reducer
