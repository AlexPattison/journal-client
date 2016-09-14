import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: '#cccccc',
    paddingTop: 12,
    paddingBottom:12
  },
  row: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 2,
  },
  rowHeader: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 0,
  },
  date: {
    justifyContent: 'flex-start',
    fontSize: 11,
    color: '#999999',
    fontWeight: '500'
  },
  location: {
    justifyContent: 'flex-end',
    fontSize: 11,
    color: '#999999',
    fontWeight: '500'
  },
  rowBody: {
    marginLeft: 0,
    marginTop: 12,
    flexDirection: 'column',
  },
  entryText: {
    justifyContent: 'flex-start',
    fontSize: 15,
    fontWeight: '500',
    color:"#424242",
  },
<<<<<<< b3f741619a67c8aa268b087a5644ab42032ab860
  rating: {
    justifyContent: 'flex-end',
    fontSize: 12,
    fontWeight: '500',
    color:"#404040",
=======
  arrow: {
    alignSelf:'flex-end',
    flexDirection: 'column',
    fontSize:24,
    color:"#c7c7cc",
>>>>>>> Add right arrow icon to entry component
  }
});

module.exports = styles;
