import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

import SearchFriends from '../Friend_Components/SearchFriends';


export default class WhiteListScene extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <SearchFriends
        navigator={ navigator }
        placeholder={ 'Who can read this?' }/>
    );
  }
}
