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
)

module.exports = EntryList;
