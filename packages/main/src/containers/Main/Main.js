import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
// import { string, number, bool, array, func, node } from 'prop-types'
import { connect } from '@rispa/redux'

@connect(
  state => ({
    // map state to props
  })
)
export default class Main extends PureComponent {
  static propTypes = {

  }

  static defaultProps = {

  }

  render() {
    // const {  } = this.props

    return (
      <div>
        Main
        <Link to='/about'>To about</Link>
      </div>
    )
  }
}
