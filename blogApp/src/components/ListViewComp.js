import React, { Component } from 'react';
import { View, Text,FlatList,Image } from 'react-native';

class ListViewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItem(item){
      return (
          <View style={{flex:1,justifyContent:'center'}}>
              <Image source={item.src}></Image>
              <Text>{item.text}</Text>
          </View>
      )
  }

  render() {
    return (
      <View>
        <FlatList data={this.props.ListData} renderItem={this.renderItem.bind(this)}>
        </FlatList>
      </View>
    );
  }
}

export default ListViewComp;
