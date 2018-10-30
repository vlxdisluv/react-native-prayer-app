import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import InputPrayer from './InputPrayer';
import PrayerList from './PrayerList';

export default class MyPrayers extends Component {
  render() {
    const { container } = styles;
    const { 
      addPrayer, 
      prayerList,
    } = this.props;

    return (
      <View style={container}>
        <InputPrayer handleAddPrayer={addPrayer}/>
        <PrayerList 
          data={prayerList}
          {...this.props}
        />  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {  
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 13,
    marginBottom: 13,
  }
});