import React from 'react'
import { shallow } from 'enzyme'
import Main from '../Main'

describe('Main', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<Main />)).toHaveLength(1)
  })
  it('should render normal with children content', () => {
    expect(shallow(<Main>Main</Main>).text()).toEqual('Main')
  })
})
