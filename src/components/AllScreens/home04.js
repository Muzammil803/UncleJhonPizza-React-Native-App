
import * as React from 'react';
import { useState } from 'react';
import { View, Text,Button,Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import NextBtn from '../buttomn/nextbtn';
import LinearGradient from 'react-native-linear-gradient';
import Pizzaimage01 from '../../assets/pizzaAssetsthinCrust.png'
import { BlurView } from "@react-native-community/blur";


const HomeScreen04 =()=>{
    const [smallStyleBox, setSmallStyleBox] = useState(true)
    const [mediumStyleBox, setMediumStyleBox] = useState(null)
    const [largeStyleBox, setlargeStyleBox] = useState(null)
    const [sixePrice, setSizePrice] = useState('$10.00')

    const navigation = useNavigation();
const navigateTo=()=>{
    navigation.navigate('home5')
}

return(
    <View style={{flex:1, backgroundColor:'#E5E5E5'}}>
       <View>
<View style={styles.halfBg}>
<LinearGradient  colors={['#FFA360', '#F5313F']}
start={{ x: 1, y: 0 }}
end={{ x: 0, y: 0 }} 
style={{width:"100%",height:'100%'}}>
    <Image source={require('../../assets/Vectoricon.png')} style={{marginLeft:30,marginTop:40}}/>
<View style={styles.headerMain}>
<Text style={styles.headerTitle}>Check your</Text>


</View>
<Text style={{marginLeft:20, color:'rgba(255, 255, 255, 1)',fontSize:25}}>Custom pizza</Text>

</LinearGradient>
</View>
<View  style={styles.blurbox}> 

{/* <BlurView
          style={styles.blurbox2}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        /> */}
        <View style={{position:'absolute',zIndex:7 ,marginLeft:8,left:30,width:240,height:328}}>
<View style={{flex:1, borderBottomWidth:1,borderBottomColor:'rgba(225, 225, 225, 0.8)'}}>
    <Image source={require('../../assets/Vectorshop.png')} style={{width:20,height:20,marginLeft:10, marginTop:27}}/>
    <Text style={{fontSize:12, color:'#F5313F',marginTop:4,marginLeft:10}}>ORDER SUMMARY</Text>
</View>
<View  style={{flex:2 , borderBottomWidth:1,borderBottomColor:'rgba(225, 225, 225, 0.8)',justifyContent:'center'}}>
    <View style={{width:200,flexDirection:'row' ,justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontSize:16,textAlign:'right',color:'#6D6E9C'}}>Medium Size</Text>
        <Text style={{color:'#6D6E9C'}}>$10.00</Text>
         </View>
         <View style={{width:200,flexDirection:'row' ,justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontSize:16,textAlign:'right',color:'#6D6E9C'}}>Thick Crust</Text>
        <Text style={{color:'#6D6E9C'}}>$4.00</Text>
         </View>
         <View style={{width:200,flexDirection:'row',color:'#6D6E9C' ,justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontSize:16,textAlign:'right',color:'#6D6E9C'}}>Mushroom</Text>
        <Text style={{color:'#6D6E9C'}}>$2.00</Text>
         </View>
         <View style={{width:200,flexDirection:'row' ,justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontSize:16,textAlign:'right',color:'#6D6E9C'}}>Black Olives</Text>
        <Text style={{color:'#6D6E9C'}}>$2.00</Text>
         </View>

         <View style={{width:200,flexDirection:'row' ,justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontSize:16,textAlign:'right',color:'#6D6E9C'}}> Pepperoni</Text>
        <Text style={{color:'#6D6E9C'}}>$0.00</Text>
         </View>

</View>
<View  style={{flex:1 ,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
    
        <Text style={{fontSize:20,color:'#6D6E9C'}}>Total</Text>
        <Text  style={{fontSize:18,color:'#6D6E9C'}}>$18.00</Text>
    
</View>

        </View>
     
        
</View>
<View style={{ 
    position:'absolute',
    width:404,
      height:404,
      borderColor:'#F4F4F4',
      borderWidth:0.4,
      borderSizing:'solid',
      borderRadius:232,
      left:154,
      top:90,
      backgroundColor:'rgba(255, 255, 255, 0.8)  ', 
      backDropFilter:'blur(4px)'   }}>

</View>
<View style={{ 
    position:'absolute',
    width:364,
      height:364,
      borderColor:'#F4F4F4',
      borderWidth:0.4,
      borderSizing:'solid',
    boxShadow:'0px 4px 15px rgba(218, 218, 229, 0.2)',
      borderRadius:232,
      left:174,
      top:109,
      backgroundColor:'white', 
      }}>
</View>
<Image source={require('../../assets/pizzaAssetsthinCrust.png') } style={{position:'absolute', width:444,
      height:444,top:90,left:120,zIndex:4}}/>
{/* <Text style={{width:48.13,
height:22.79,backgroundColor:'#DADAE5',
textAlign:'center' ,borderRadius:10,position:'absolute',
textAlignVertical:'center',
left:168,top:430,color:'#A0A8CC',fontSize:10}}>
   12" 
</Text> */}

       </View>
       <NextBtn val='Confirm Pizza' task={navigateTo} />

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
        color:'rgba(255, 255, 255, 0.7)',
                fontFamily:'roboto',
     fontSize:20,
     marginTop:10,
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
    blurbox:{ 
        position:'absolute',
        width:290,
          height:340,
          borderTopRightRadius:20,
          borderBottomRightRadius:20,
         
          left:-20,
          top:180,
          zIndex:40,
          backgroundColor:'rgba(255, 255, 255, 0.6)'}

, blurbox2:{ 
    // position:'absolute'
    width:280,
      height:328,
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
     borderRadius:20,
      marginTop:4
      
      
    //   backgroundColor:'rgba(255, 255, 255, 0.4)'
    }

})

export default HomeScreen04;