import React from 'react'
import { shallow } from 'enzyme'
import About from '../About'

describe('About', () => {
  it('should render normal without any props supplied', () => {
    expect(shallow(<About />)).toHaveLength(1)
  })
  it('should render normal with children content', () => {
    expect(shallow(<About>About</About>).text()).toEqual('About')
  })
})
