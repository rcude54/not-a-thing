const fetchIntercept = require('fetch-intercept');
const http = require('http');

const fetchResp = http.ServerResponse;
fetchResp.statusCode = 404;
fetchResp.statusMessage = 'Stop trying to make fetch happen';


fetchIntercept.register({
    request: function (url, config) {
        // Modify the url or config here
        return [url, config];
    },

    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        return Promise.reject(error);
    },

    response: function (response) {
      return fetchResp;
    },

    responseError: function (error) {
      return fetchResp;
    }
});