import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import DashboardCmp from './dashboard-cmp.jsx';
import ProductList from './products/list.jsx';

export default React.createClass({
  getInitialState() {
    return {
      products: [],
      licenses: []
    }
  },

  getChildContext() {
    return {
      products: this.state.products,
      licenses: this.state.licenses
    }
  },

  componentDidMount() {
    this.props.app.service('products').find().then(products => {
      this.setState({
        products: products.data
      });
    });

    this.props.app.service('licenses').find().then(licenses => {
      this.setState({
        licenses: licenses.data
      });
    });
  },

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={DashboardCmp}>
          <IndexRoute component={ProductList} />
        </Route>
      </Router>
    );
  }
});
