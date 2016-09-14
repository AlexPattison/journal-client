import React, { Component } from 'react';
import DateFormatter from 'dateformat';

import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  Dimensions,
<<<<<<< b3f741619a67c8aa268b087a5644ab42032ab860
  AsyncStorage,
=======
  TouchableHighlight
>>>>>>> Add right arrow icon to entry component
} from 'react-native';

import styles from '../styles/EntryStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

<<<<<<< b3f741619a67c8aa268b087a5644ab42032ab860
=======
var Entry = (props) => (
  <TouchableHighlight onPress={()=>{ props.navigator.push({title: 'WhiteListScene'})}}>
    <View style={ styles.container }>
      <View style={ styles.row }>
        <View style={ styles.rowHeader }>
          <Text style={ styles.date }>
            { parseDate(props.createdAt) }
          </Text>
          <Text style={ styles.location }>
            { props.location }
          </Text>
        </View>
        <View style={ styles.rowBody }>
          <Text style={ styles.entryText }>
            { props.text }
          </Text>

          <Icon style= {styles.arrow} name="navigate-next" ></Icon>
        </View>
      </View>
    </View>
  </TouchableHighlight>
);

module.exports = Entry;

>>>>>>> Add right arrow icon to entry component
var parseDate = (date) => {
  if (date) {
    date = new Date(date);
    return DateFormatter(date, "ddd, mmm d");
  } else {
    return 'October 10th';
  }
};

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      likes: props.rating,
    };

    var context = this;
    this.likePost = () => {
      AsyncStorage.getItem('@MySuperStore:token', (err, token) => {
        fetch('http://localhost:3000/api/likes', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-access-token': token,
          },
          body: JSON.stringify({
            user: props.user,
            entryId: props.id,
          }),
        }).then(function (response) {
          context.setState({likes: context.state.likes + 1});
        }).catch(function (error) {
          console.log(error);
        });
      });
    };
  }

  render() {
    return (
      <TouchableHighlight onPress={()=>{ this.props.navigator.push({title: 'WhiteListScene'})}}>

        <View style={ styles.container }>
          <View style={ styles.row }>
            <View style={ styles.rowHeader }>
              <Text style={ styles.date }>
                { parseDate(this.props.createdAt) }
              </Text>
              <Text style={ styles.location }>
                { this.props.location }
              </Text>
            </View>
            <View style={ styles.rowBody }>
              <Text style={ styles.entryText }>
                { this.props.text }
              </Text>
              <Text style={ styles.rating } onPress={ this.likePost }>
                Rating:{ this.state.likes }
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>

    )
  }
}
