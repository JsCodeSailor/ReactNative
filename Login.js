import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput} from 'react-native';
import{Button}from 'react-native';
  export default class login extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.Images}
          source={require('./img/timg.jpg')}
        />
     <TextInput 
        style={styles.TextInputs}
        onChangeText={(name) => this.setState({name})}
        placeholder="name"
      />
      
      <TextInput secureTextEntry ={true}
        style={styles.TextInputs}     
         placeholder="password"
      />

 <View style={{width:250,marginTop:10}}>

 <Button title={"登录"}
            onPress={() => navigate('HomeScreen1')}
          ></Button>
{/* 
<Button title={"登录2"}
            onPress={() => navigate('Message1')}
          ></Button> */}
</View>

</View>

    )  
  }
}

//StyleSheet.create 样式布局
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',//伸缩项目在主轴线的对齐方式
    backgroundColor: '#F5FCFF',
    flexDirection:'column', //主轴方向
    alignItems:'center',//交叉轴对齐方式
    // flexWrap:'wrap',// 定义如何换行
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    backgroundColor:"red"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    
  },
  TextInputs: {
      width:250,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius:5,
      marginBottom:10
    },

   Images: {
     flexDirection:'column',
     marginTop:80,
     marginBottom:30
    }

  
});


