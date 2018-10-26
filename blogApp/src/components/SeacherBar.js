import React, { Component } from 'react';
import { View, Text , TextInput ,Keyboard,Button,StyleSheet,Alert } from 'react-native';
import { gray } from 'ansi-colors';
import Api from '../api/api';
import netUtil from '../api/netUtil';

class SeacherBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount = () => {
    
  };

  componentWillUnmount = () => {
    
  };

  queryData(){
      let loadData = netUtil.getListData(Api.listData,{
        method:"get"
      },(res)=>{
         this.props.callback(res);
      });
  }
  

  render() {
    return (
      <View style={styles.SeacherBarView}>
        <TextInput style={styles.SeacherInput} placeholder="hello world" onSubmitEditing={Keyboard.dismiss}></TextInput>
        <Button style={styles.SeacherButton} onPress={this.queryData.bind(this)} title='seacher'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    SeacherBarView:{
        height:50,
        // flex: 1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexDirection:'row'
    },
    SeacherInput:{
        width:280,
        left:10,
        height:50
    },
    SeacherButton:{
        // width:30,
        color:'gray',
        fontSize: 20,
    }
})

export default SeacherBar;
