'use strict';

var React = require('react-native');
var AboutView = require('./Home/About');
var GroupsView = require('./Home/Groups');
var SearchView = require('./Home/Search');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  NavigatorIOS,
  Image
  } = React;

var IndexView = React.createClass({
  statics: {
    title: 'index',
    description: '应用首页'
  },

  getInitialState: function () {
    return {
      selectedBar: 'group'
    };
  },

  _renderContent: function (title, component) {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute={{
          title: title,
          component: component
        }} />
    );
  },

  render: function () {
    return (
      <TabBarIOS selectedTab={this.state.selectedBar}>
        <TabBarIOS.Item
          title = '组群'
          key = 'group'
          name = 'group'
          icon = {require('image!groups')}
          selected = {this.state.selectedBar == 'group'}
          onPress = {() => this.setState({selectedBar: 'group'})}
        >
          {this._renderContent('组群', GroupsView)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = '搜索'
          key = 'search'
          name = 'search'
          icon = {require('image!search')}
          selected = {this.state.selectedBar == 'search'}
          onPress = {() => this.setState({selectedBar: 'search'})}
        >
          {this._renderContent('搜索', SearchView)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = '关于'
          key = 'about'
          name = 'about'
          selected = {this.state.selectedBar == 'about'}
          systemIcon = 'more'
          onPress = {() => this.setState({selectedBar: 'about'})}
        >
          {this._renderContent('关于', AboutView)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = IndexView;
