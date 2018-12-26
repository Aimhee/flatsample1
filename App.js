import React, {Component} from 'react';
import {  FlatList } from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {randomUsers} from './components/util';

export default class App extends Component {
  state = {
    refreshing: false,
    data: randomUsers(20),
  };
  onEnReached = () => {
    this.setState(state => ({
      date: [
        ...state.data,
        ...randomUsers(),
      ]
    }));
  };
  onRefresh = () => {
    this.setState({
      data:randomUsers(20)
    });
  }
  render() {
    return (
      <List>
        <FlatList
        data={this.state.data}
        initialNumToRender={20}
        onEndReachedThreshold={1}
        onEndReached={this.onEndReached}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        horizontal={false}
        renderItem={({ item }) => {
          return (
            <ListItem
              roundAvatar
              avatar={{uri: item.avatar}}
              title={item.name}
              subtitle={item.email}
            />
          );
        }}
      />
      </List>
    );
  }
}