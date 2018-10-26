/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Alert} from 'react-native';
import SeacherBar from './src/components/SeacherBar';
import ListViewComp from './src/components/ListViewComp';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      ListData:[],
      text:'hello'
    }
  }
  
  updateListData(args){
    args = JSON.parse(args);
    this.setState({
      ListData:args.ListData,
      text:args.text
   });
  //  alert(JSON.stringify(this.state.ListData))
  }

  render() {
    return (
      <View style={styles.container}>
        <SeacherBar style={{height:20}} callback={this.updateListData.bind(this)}></SeacherBar>
        <ListViewComp ListData={this.state.ListData}></ListViewComp>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:35,
    // justifyContent: 'flex-start',
    // // alignItems: 'center',
    // flexDirection:'column',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
