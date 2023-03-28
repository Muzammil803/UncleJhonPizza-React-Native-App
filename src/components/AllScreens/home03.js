
import * as React from 'react';
import { useState } from "react";
import { View, Text,Button,Image,StyleSheet,SafeAreaView,FlatList,StatusBar ,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import NextBtn from '../buttomn/nextbtn';
import LinearGradient from 'react-native-linear-gradient';
import Pizzaimage01 from '../../assets/pizzaAssetsthinCrust.png'



const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Pepperoni",
    imgSrc:'../../assets/pepperoni 1.png'

  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Pepperoni",
    imgSrc:'../../assets/pepperoni 12.png'

  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Pepperoni",
    price:"+$0.00",
    imgSrc:'../../assets/pepperoni 1.png'
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, ]}>
  <Image source={require('../../assets/pepperoni1.png') } style={{width:60, height:60,marginHorizontal:10}}/>
    <View>
        <Text style={[styles.title, ]}>{item.title}</Text>
    <Text style={[styles.titlePrice, ]}>+$0.00</Text>
        </View>
  </TouchableOpacity>
);

const HomeScreen3 =()=>{

    const navigation = useNavigation();


      const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#ffff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
const navigateTo=()=>{
    navigation.navigate('home4')
}

return(
    <View style={{flex:1, backgroundColor:'#E5E5E5'}}>
       <View>
<View style={styles.halfBg}>
<LinearGradient  colors={['#FFA360', '#F5313F']}
start={{ x: 1, y: 0 }}
end={{ x: 0, y: 0 }} 
style={{width:"100%",height:'100%'}}>
<View style={styles.headerMain}>
<Text style={styles.headerTitle}>Create Your Pizza</Text>
<Text style={styles.headerPrice}>$14.00</Text>

</View>
<Text style={{marginLeft:20, color:'rgba(255, 255, 255, 0.3)',fontSize:10}}>MEDIUM , SIZE , CRUST , TOPPING</Text>

</LinearGradient>
</View>
<View style={{ 
    position:'absolute',
    width:401.74,
      height:387,
      borderColor:'#DADAE5',
      borderWidth:0.5,
      borderSizing:'solid',
      borderRadius:180,
      left:-20,
      top:56,
      zIndex:-2,
      backgroundColor:'#fffg'}}>

</View>
<View style={{ 
    position:'absolute',
    width:324,
      height:324,
      borderColor:'#F4F4F4',
      borderWidth:0.4,
      borderSizing:'solid',
      borderRadius:162,
      left:20,
      top:80,
      backgroundColor:'rgba(255, 255, 255, 0.8)  ', 
      backDropFilter:'blur(4px)'   }}>

</View>
<View style={{ 
    position:'absolute',
    width:274,
      height:274,
      borderColor:'#F4F4F4',
      borderWidth:0.4,
      borderSizing:'solid',
    boxShadow:'0px 4px 15px rgba(218, 218, 229, 0.2)',
      borderRadius:162,
      left:44,
      top:104,
      backgroundColor:'white', 
      }}>
</View>
<Image source={require('../../assets/pizzaAssetsthinCrust.png') } style={{position:'absolute',top:90,left:10}}/>
<Text style={{width:48.13,
height:22.79,backgroundColor:'#DADAE5',
textAlign:'center' ,borderRadius:10,position:'absolute',
textAlignVertical:'center',
left:168,top:430,color:'#A0A8CC',fontSize:10}}>
   +$2.00 
</Text>
<View style={styles.sizeBox}>
<Text style={styles.sizeText}>Choose up to <Text style={{fontWeight:'bold'}}>7 troppings</Text></Text>
{/* <View style={styles.sizeBtnBox}> */}
 
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal 
      style= {{ width:'100%',
        height:79,
        position:'absolute'
    }}
      />
    </SafeAreaView>
{/* </View> */}
</View>
       </View>
       <NextBtn val='Done' task={navigateTo} />

    </View>
)

}

const styles= StyleSheet.create({
    halfBg:{
        height:247,
        backgroundColor:"yellow"
    },
    headerMain:{
        flexDirection:'row'
    },
    headerTitle:{
        color:'white',
        fontFamily:'roboto',
     fontSize:25,
     marginTop:20,
     marginLeft:20,

    },
    headerPrice:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        marginTop:20,
        marginLeft:59,
    },
    ellipse3:{
        borderSizing:'border-box',
        width:402,
        heght:387,
        border:'0.5px solid #DADAE5',
        backgroundColor:'yellow',
        borderRadius:'100%',
        position:'absolute',
        top:120
        

    },
    sizeBox:{
        width:325,
        height:120,
        marginTop:220,
        marginHorizontal:20,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius:20
    },
    sizeText:{
        alignSelf:'center',
        marginTop:10,
        fontSize:20,
        color:'#6D6E9C',
        fontFamily:'roboto',


    },
    sizeBtnBox:{
        width:'100%',
        height:40,
        marginTop:20,
        flexDirection:'row',
alignItems:'center',
justifyContent:"space-evenly"

    },
    sizeBtn:{
         width:90,
        height:38,
        // backgroundColor:'white',
        // backgroundColor:'yellow',
        borderRadius:18,
        justifyContent:'center',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:15,
    },
     container: {
   
    marginTop: 4,
  },
  item: {
    width:180,
    height:60,
    marginVertical: 8,
    marginHorizontal: 16,
    border:' 0.5px solid #DADAE5',
    backgroundColor:'#ffff',
    borderRadius:20,
    flexDirection:'row',
    alignItems:'center',
  },
  title: {
    fontSize: 14,
    fontWeight:'bold'
  },
titlePrice:{
fontSize:12,

}

})

export default HomeScreen3;