import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

// VB: Refactored require to use import, for consistency
import Entry from './Entry';
import styles from '../styles/EntryListStyles';

var EntryList = ({entries, navigator}) => (
    <ListView style ={styles.container}
       dataSource={entries}
       renderRow={ (rowData) =>
          <Entry navigator={ navigator } id={ rowData.id } rating={ rowData.rating } text={ rowData.text } createdAt={ rowData.createdAt } location={ rowData.location }/>
        }/>
)

module.exports = EntryList;
