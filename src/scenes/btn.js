/**
 * Button component with lots of styling and
 * configuration for differnt border colors
 *
 * Button can be instantiated with
 * <Button borderColor='red'/> or
 * <Button borderColor='blue'/>
 */

import React, { Component } from 'react'
import Radium from 'radium'

@radium
class Button extends Component {
  static propTypes = {
    borderColor: React.PropTypes.oneOf(['red', 'blue']).isRequired
  }

  render() {
    const { borderColor } = this.props

    return (
      <div style={[styles.btnStyles, styles[borderColor]]}>
        Button Name
      </div>
    )
  }
}

const styles = {
  btnStyles: {
    // lots of stylings
  },

  red: { border: 'solid 1px red' },
  blue: { border: 'solid 1px blue' }
}
