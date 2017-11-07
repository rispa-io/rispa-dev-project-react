import React, { PureComponent } from 'react'
// import { string, number, bool, array, func, node } from 'prop-types'
import { connect } from '@rispa/redux'

@connect(
  state => ({
    // map state to props
  })
)
export default class About extends PureComponent {
  static propTypes = {

  }

  static defaultProps = {

  }

  render() {
    // const {  } = this.props

    return (
      <div>
        About
      </div>
    )
  }
}
