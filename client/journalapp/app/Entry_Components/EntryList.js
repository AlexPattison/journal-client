import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  AsyncStorage
} from 'react-native';

// VB: Refactored require to use import, for consistency
import Swipeout from 'react-native-swipeout';
import Entry from './Entry';
import styles from '../styles/EntryListStyles';

<<<<<<< e994a9b6e49128058d4c281aee91074357832074
var EntryList = ({entries, rerender, userEntries}) => (
    <ListView 
      dataSource={entries} 
      style={styles.container} 
      renderRow={ (rowData) => {
        let swipeBtn = [{
          text: 'Delete',
          backgroundColor: 'red',
          onPress: () => {
            AsyncStorage.getItem('@MySuperStore:token', (err, token) => {
              fetch('http://localhost:3000/api/entries', {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  'x-access-token': token,
                },
                body: JSON.stringify({ id: rowData.id })
              }).then(response => {
                console.log('Message deleting entry: ', response);
                if (userEntries) {
                  rerender();
                }
              }).catch(err => {
                console.log('Error deleting entry: ', err);
              })
            })
          }
        }]
        return userEntries ? (
          <Swipeout right={swipeBtn} autoClose='true' backgroundColor='transparent'>
            <Entry id={ rowData.id } votes={ rowData.votes } text={ rowData.text } createdAt={ rowData.createdAt } location={ rowData.location }/>
          </Swipeout>
        ) : (<Entry id={ rowData.id } votes={ rowData.votes } text={ rowData.text } createdAt={ rowData.createdAt } location={ rowData.location }/>)
      }}/>
=======
var EntryList = ({entries}) => (
    <ListView style ={styles.container}
       dataSource={entries}
       renderRow={ (rowData) =>
<<<<<<< 2f6d2db77393e5256f6322003225abc6f303d0fa
          <Entry id={ rowData.id } rating={ rowData.rating } text={ rowData.text } createdAt={ rowData.createdAt } location={ rowData.location }/>
=======
          <Entry text={ rowData.text }
            createdAt={ rowData.createdAt }
            location={ rowData.location }/>
>>>>>>> Add to entry components
        }/>
>>>>>>> More merge conflict fixes
)

module.exports = EntryList;
