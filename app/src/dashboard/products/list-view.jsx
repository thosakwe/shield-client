import React from 'react';
import moment from 'moment';

const ProductCard = React.createClass({
  render() {
    return (
      <div className="ui card">
        <div className="content">

        </div>
      </div>
    );
  }
});

export default React.createClass({
  render() {
    return (
      <div className="ui two cards">
        {this.props.products.map(product => <ProductCard product={product} />)}
      </div>
    );
  }
});
