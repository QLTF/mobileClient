import React, { Component } from 'react';
import { View, Text,FlatList,Image,StyleSheet } from 'react-native';

class ListViewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItem(res){
      alert(JSON.stringify(res));
      return <Text>{res.item.title}</Text>
  }

  render() {
    return (
      <View style={styles.itemContinal}>
        <FlatList data={this.props.ListData} renderItem={({item}) => 
             <View style={{flex:1,flexDirection:'row',alignItems:'flex-start'}}>
               <Image source={{uri:item.src,flex:1}} style={{ width: 40, height: 40 }}/>
               <View style={{height:40,flex:6,justifyContent: 'center',backgroundColor:'gray',margin:5}}>
               <Text style={{fontSize:20}}>{item.title}</Text>
               </View>
             </View>
            }>
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    itemContinal:{
      flex:1,
      top:0,
      height:700,
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      flexDirection:'row'
    }
})

export default ListViewComp;
