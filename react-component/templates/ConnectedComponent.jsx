import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const <%= moduleName %> = (props) => {
  const {} = props;

  return ();
};

<%= moduleName %>.propTypes = {};

function mapStateToProps(state) {
  return state;
};

const Connected<%= moduleName %> = connect(
  mapStateToProps,
)(<%= moduleName %>);

Connected<%= moduleName %>.propTypes = {};

export default Connected<%= moduleName %>;
