import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  singleJobContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'stretch'
  },
  singleJobHeader: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2'
  },
  backArrow: {
    position: 'absolute',
    left: 12,
    top: 8
  },
  headerTitle: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 16,
    color: '#34495e'
  },
  jobTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2'
  },
  companyLogoContainer: {
    paddingTop: 20,
    paddingBottom: 0,
    alignSelf: 'center'
  },
  companyLogo: {
    width: 280,
    height: 120
  },
  jobTitleTexts: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  jobTitle: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 18,
    textAlign: 'center',
    color: '#34495e',
    marginBottom: 5
  },
  subTitle: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 14,
    color: '#424242',
    textAlign: 'center'
  },
  jobInfoTexts: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoTextBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  infoText: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 14,
    color: '#5a5a5a',
    paddingLeft: 10
  },
  jobDescriptionContainer: {
    flex: 1,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  howToDevider: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 16,
    paddingBottom: 10,
    color: '#222222'
  }
})

export const htmlStyles = StyleSheet.create({
  p: { fontFamily: 'FiraSans-Regular', fontSize: 14, lineHeight: 18, color: '#141414' },
  a: { fontFamily: 'FiraSans-Regular', fontSize: 14, lineHeight: 18, color: '#3498db', paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 10 },
  b: { fontFamily: 'FiraSans-Medium', fontSize: 14, lineHeight: 18, color: '#222222' },
  strong: { fontFamily: 'FiraSans-Medium', fontSize: 14, lineHeight: 18, color: '#222222' },
  blockquote: { fontFamily: 'FiraSans-Regular', fontSize: 14, lineHeight: 18, color: '#222222' },
  em: { fontFamily: 'FiraSans-Regular', fontSize: 14, lineHeight: 18, color: '#222222' },
  i: { fontFamily: 'FiraSans-Regular', fontSize: 14, lineHeight: 18, color: '#222222' },
  li: { fontFamily: 'FiraSans-Regular', fontSize: 14, lineHeight: 18, color: '#141414' },
  h1: { fontFamily: 'FiraSans-Medium', fontSize: 18, lineHeight: 18, color: '#222222', paddingTop: 5, paddingBottom: 5 },
  h2: { fontFamily: 'FiraSans-Medium', fontSize: 17, lineHeight: 18, color: '#222222', paddingTop: 5, paddingBottom: 5 },
  h3: { fontFamily: 'FiraSans-Medium', fontSize: 16, lineHeight: 18, color: '#222222', paddingTop: 5, paddingBottom: 5 },
  h4: { fontFamily: 'FiraSans-Medium', fontSize: 16, lineHeight: 18, color: '#222222', paddingTop: 5, paddingBottom: 5 },
  h5: { fontFamily: 'FiraSans-Medium', fontSize: 15, lineHeight: 18, color: '#222222', paddingTop: 5, paddingBottom: 5 },
  h6: { fontFamily: 'FiraSans-Medium', fontSize: 14, lineHeight: 18, color: '#222222', paddingTop: 5, paddingBottom: 5 },

})
