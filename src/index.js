import PropTypes from 'prop-types'
import React from 'react'
import RCDropdown from 'rc-dropdown'
import 'rc-dropdown/assets/index.css'

/**
 * An wrapper of rc-dropdown
 * manage the visible state out of the internal dropdown component
 * so it works with elements other than rc-menu
 */
class Dropdown extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  /**
   * https://github.com/react-component/dropdown/blob/993fad074206c6f16d002d7050065613337dda89/src/Dropdown.jsx#L78
   * the internal dropdown ignores trigger event if visible has been passed as props
   * hence we set state here
   *
   * Ideally we should track previous state like
   * https://github.com/react-component/trigger/blob/cc3104a8507e8c541711a92fec110ec7487a33c3/src/index.js#L477
   *
   * However a simple NOT operator is enough in our case (hopefully)
   */
  handleVisibleChange = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }

  render () {
    const { visible } = this.state
    const { children, ...props } = this.props

    return (
      <RCDropdown
        onVisibleChange={this.handleVisibleChange}
        visible={visible}
        {...props}
      >
        {children}
      </RCDropdown>
    )
  }
}

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Dropdown