import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './src/dashboard/dashboard.jsx';
import Login from './src/login/login.jsx';

export default function(app, host) {
  app.authenticate().then(function() {
    ReactDOM.render(<Dashboard app={app} user={app.get('user')} />, host);
  }).catch(function() {
    ReactDOM.render(<Login app={app} host={host} />, host);
  });
}
