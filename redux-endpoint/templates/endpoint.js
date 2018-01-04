import { createEndpoint } from 'redux-endpoints';

const endpoint = createEndpoint({
  name: '<%= moduleName %>',
  request: (url, options) => {
    return fetch(url)
      .then(resp => resp.json())
      .then(json => json);
  },
  resolver: ({ id }) => id,
  rootSelector: state => state.<%= moduleName %>,
  url: '/:id',
});

export default endpoint;
