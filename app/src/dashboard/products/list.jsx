import React from 'react';
import ProductListView from './list-view.jsx';

export default React.createClass({
  render() {
    return(
      <div>
        <div className="ui header">
          <i className="laptop icon"></i>
          <div className="content">
            All Apps
          </div>
        </div>
        <ProductListView products={this.context.products} />
      </div>
    );
  }
});
