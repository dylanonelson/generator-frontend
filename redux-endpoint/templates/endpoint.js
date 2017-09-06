import { createEndpoint } from 'redux-endpoints';

const endpoint = createEndpoint({
  name: '<%= moduleName %>',
  request: (url, options) => new Promise((resolve, reject) => {
    fetch(url)
      .then(resp => resp.json())
      .then(json => resolve(json));
  }),
  resolver: (id) => id,
  url: '/:id',
});

export default endpoint;
