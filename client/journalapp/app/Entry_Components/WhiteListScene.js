import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import CheckBox from 'react-native-checkbox';

import SearchFriends from '../Friend_Components/SearchFriends';

export default class WhiteListScene extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <CheckBox
          label='Label'
          checked={true}
          onChange={(checked) => console.log('I am checked', checked)}
        />

        <SearchFriends
          navigator={ navigator }
          placeholder={ 'Who can read this?' }/>
      </View>
    );
  }
}
