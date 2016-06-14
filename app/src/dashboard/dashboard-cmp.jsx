import React from 'react';

const gridStyle = {
  height: "100%",
  margin: "-1rem",
  padding: 0
};

const menuStyle = {
  borderRadius: 0,
  height: "100%"
};

export default React.createClass({
  render() {
    return (
      <div className="ui stretched page grid" style={gridStyle}>
        <div className="four wide column">
          <div className="ui fluid inverted vertical menu" style={menuStyle}>
            <div className="item">
              <i className="home icon"></i>
              Regios Shield
              <div className="menu">
                <a className="item">
                  <i className="fire icon"></i>
                  What's Hot
                </a>
                <a className="item">
                  <i className="table icon"></i>
                  By Category
                </a>
                <a className="item">
                  <i className="search icon"></i>
                  Search Apps
                </a>
              </div>
            </div>
            <div className="item">
              <i className="user icon"></i>
              {this.props.user.username}
              <div className="menu">
                <a className="item">
                  <i className="ticket icon"></i>
                  My Licenses
                </a>
                <a className="item">
                  <i className="usd icon"></i>
                  Transactions
                </a>
              </div>
            </div>
            <div className="item">
              <i className="code icon"></i>
              Developer
              <div className="menu">
                <a className="item">
                  <i className="laptop icon"></i>
                  My Apps
                </a>
                <a className="item">
                  <i className="star icon"></i>
                  Subscription
                </a>
              </div>
            </div>
            <a className="item">
              <i className="cloud download icon"></i>
              Updates
              <div className="ui red label">
                0
              </div>
            </a>
            <a className="item">
              <i className="download icon"></i>
              Downloads
              <div className="ui red label">
                0
              </div>
            </a>
          </div>
        </div>
        <div className="twelve wide column">
          <div className="ui container">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
});
