import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const <%= moduleName %> = (props) => {
  const {} = props;

  return (<div><%= moduleName %></div>);
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
