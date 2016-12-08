import React from 'react'

export const Bundle = (props) => (
  <iframe />
)

Bundle.propTypes = {
  bundle     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Bundle
