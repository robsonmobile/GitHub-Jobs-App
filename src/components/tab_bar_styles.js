import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2'
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 0
  },
  logo: {
    fontFamily: 'FiraSans-Bold',
    fontSize: 18,
    color: '#34495e'
  },
  eachTabContainer: {
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabTitle: {
    color: '#bdc3c7',
    fontFamily: 'FiraSans-Medium',
    fontSize: 14
  },
  titleActive: {
    color: '#34495e'
  }
})
