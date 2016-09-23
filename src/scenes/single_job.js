import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Platform,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { styles, htmlStyles } from './single_job_styles'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Entypo'
import HTMLView from 'react-native-htmlview'

// import actions
import { saveJob, deleteJob } from '../actions'

class SingleJob extends Component {
  static defaultProps = {
    savedJob: false
  }

  render() {
    const {
      company,
      company_logo,
      company_url,
      created_at,
      description,
      how_to_apply,
      id,
      location,
      title,
      type,
      url
    } = this.props.data
    const { savedJob } = this.props

    const platformSpecificStyle = (Platform.OS === 'ios') ? { paddingTop: 15 } : { paddingTop: 0 }

    // removing any whitespaces between tags for better representation
    let descriptionModified = description.replace(/\>\s+\</g, '><')
    descriptionModified = descriptionModified.replace(/ul\>\<p/g, 'ul>\n<p')
    descriptionModified = descriptionModified.replace(/ul\>\<h1/g, 'ul>\n<h1')
    descriptionModified = descriptionModified.replace(/ul\>\<h2/g, 'ul>\n<h2')
    descriptionModified = descriptionModified.replace(/ul\>\<h3/g, 'ul>\n<h3')
    descriptionModified = descriptionModified.replace(/ul\>\<h4/g, 'ul>\n<h4')
    descriptionModified = descriptionModified.replace(/ul\>\<h5/g, 'ul>\n<h5')
    descriptionModified = descriptionModified.replace(/ul\>\<h5/g, 'ul>\n<h5')
    descriptionModified = descriptionModified.replace(/ul\>\<em/g, 'ul>\n<em')
    descriptionModified = descriptionModified.replace(/ul\>\<strong/g, 'ul>\n<strong')
    descriptionModified = descriptionModified.replace(/ul\>\<b/g, 'ul>\n<b')

    // display time in friendly fashion
    let time = moment(created_at).fromNow()

    return (
      <View style={[styles.singleJobContainer, platformSpecificStyle]}>
        <View style={styles.singleJobHeader}>
          <TouchableWithoutFeedback onPress={ () => this.props.navigator.pop() }>
            <View style={[styles.backArrow]}>
              <Icon name="chevron-small-left" size={36} color="#3498db"/>
            </View>
          </TouchableWithoutFeedback>
          <View>
            <Text style={styles.headerTitle}>Job Details</Text>
          </View>
        </View>

        <ScrollView style={{flex: 1}}>
          <View style={styles.jobTitleContainer}>
            { company_logo ?
              <View style={styles.companyLogoContainer}>
                <Image resizeMode='center' style={styles.companyLogo} source={{uri: company_logo }} />
              </View> :
              null
            }
            <View style={styles.jobTitleTexts}>
              <Text style={styles.jobTitle}>{title}</Text>
              <Text style={styles.subTitle}>{company} - {location}</Text>
            </View>
            <View style={styles.jobInfoTexts}>
              <View style={styles.infoTextBox}>
                <Icon name="gauge" size={20} color="#3498db"/>
                <Text style={styles.infoText}>{type}</Text>
              </View>
              <View style={styles.infoTextBox}>
                <Icon name="stopwatch" size={20} color="#3498db"/>
                <Text style={styles.infoText}>{time}</Text>
              </View>
            </View>
          </View>

          <View style={styles.jobDescriptionContainer}>
            <HTMLView
            value={descriptionModified}
            stylesheet={htmlStyles}
            onLinkPress={(url) => Linking.openURL(url).catch(err => console.error('An error occurred', err))}
            />

            <Text style={styles.howToDevider}>How to apply</Text>

            <HTMLView
            value={how_to_apply}
            stylesheet={htmlStyles}
            onLinkPress={(url) => Linking.openURL(url).catch(err => console.error('An error occurred', err))}
            />
          </View>
          <TouchableOpacity onPress={ savedJob ? null : _saveJob.bind(this).this.props.data }>
            <View style={[styles.saveJob, savedJob && {backgroundColor: '#e74c3c'}]}>
              <Icon name="save" size={24} color="#ffffff"/>
              <Text style={styles.saveJobTxt}>{savedJob ? 'DELETE JOB' : 'SAVE JOB'}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }

  _saveJob(job) {
    this.props.saveJob(job)
  }
}

export default connect(null, {saveJob, deleteJob})(SingleJob)
