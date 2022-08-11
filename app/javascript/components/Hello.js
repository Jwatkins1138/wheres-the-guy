import React from "react"
import PropTypes from "prop-types"
class Hello extends React.Component {
  render () {
    return (
      <React.Fragment>
        Name: {this.props.name}
      </React.Fragment>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string
};
export default Hello
