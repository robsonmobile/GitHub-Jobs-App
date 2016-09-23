import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1'
  },
  titlesContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1
  },
  title: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 14,
    color: '#34495e'
  },
  subTitle: {
    fontFamily: 'FiraSans-Regular',
    fontSize: 13,
    color: '#7f8c8d'
  }
})
