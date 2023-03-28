
import * as React from 'react';
import { useState } from 'react';
import { View, Text,Button,Image,StyleSheet ,Modal, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import NextBtn from '../buttomn/nextbtn';
import LinearGradient from 'react-native-linear-gradient';
import Pizzaimage01 from '../../assets/pizzaAssetsthinCrust.png'
import { BlurView } from "@react-native-community/blur";


const HomeScreen5 =()=>{
    const [smallStyleBox, setSmallStyleBox] = useState(true)
    const [mediumStyleBox, setMediumStyleBox] = useState(null)
    const [largeStyleBox, setlargeStyleBox] = useState(null)
    const [sixePrice, setSizePrice] = useState('$10.00')
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();
const navigateTo=()=>{
   
    navigation.navigate('home')
}

return(
    <View style={{flex:1, backgroundColor:'#E5E5E5'}}>
       <View>
<View style={styles.halfBg}>
<LinearGradient  colors={['#FFA360', '#F5313F']}
start={{ x: 1, y: 0 }}
end={{ x: 0, y: 0 }} 
style={{width:"100%",height:'100%'}}>
    <Image source={require('../../assets/Vectorcheckshop.png')} style={{marginLeft:40,marginTop:40}}/>
<View style={styles.headerMain}>
<Text style={styles.headerTitle}>Checkout</Text>


</View>

</LinearGradient>
</View>
<View  style={styles.blurbox}> 

<BlurView
          style={styles.blurbox2}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
          blurRadius={20}
        />
        <View style={{position:'absolute',zIndex:7 ,marginLeft:8,left:30,width:240,height:284}}>
<View style={{flex:2, borderBottomWidth:1,borderBottomColor:'#DADAE5'}}>
  <View style={{flexDirection:'row'}}>

    <Image source={require('../../assets/locationlogo.png')}
     style={{width:20,height:20, marginTop:27}}/>
    <Text style={{fontSize:20,fontWeight:'bold', color:'#F5313F',marginTop:24,marginLeft:10}}>Delivery Address</Text>
  </View>
  <Text style={{fontWeight:'bold',color:'#6D6E9C',marginTop:10}}>Home</Text>
  <Text style={{color:'#6D6E9C',}}>Chishti nagar , orangi town ,Karachi</Text>
</View>
<View  style={{flex:1 , borderBottomWidth:1,borderBottomColor:'#DADAE5',justifyContent:'center'}}>
   
<Text style={{fontWeight:'bold',color:'#6D6E9C',fontSize:14}}>+    Add delivery instruction</Text>
</View>
<View  style={{flex:2 ,justifyContent:'center'}}>
    
<Text style={{fontWeight:'bold',color:'#6D6E9C',fontSize:14}}>Contactless Delivery:</Text>
<Text style={{color:'#6D6E9C',fontSize:14}}>Rider will place your order at your door</Text>

</View>

        </View>
     
        
</View>
<View  style={styles.blurbox2nd}> 
{/* 
<BlurView
          style={styles.blurbox22nd}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
          blurRadius={20}
        /> */}
        <View style={{position:'absolute',zIndex:7 ,marginLeft:8,left:30,width:240,height:140}}>
<View style={{flex:2,}}>
  <View style={{flexDirection:'row'}}>

    <Image source={require('../../assets/Vectorvallet.png')}
     style={{width:20,height:20, marginTop:27}}/>
    <Text style={{fontSize:20,fontWeight:'bold', color:'#F5313F',marginTop:24,marginLeft:10}}>Payment method</Text>
  </View>
  
  <View style={{flexDirection:'row',alignItems:'center',}}>
  <Image source={require('../../assets/vise.png')}
     style={{width:30,height:30, marginRight:10,marginTop:10}}/>

  <View>

<Text style={{fontWeight:'bold',color:'#6D6E9C',marginTop:10}}>Visa</Text>
<Text style={{color:'#6D6E9C',}}>...3423</Text>
</View></View>
</View>
<View  style={{flex:1 ,justifyContent:'center'}}>
   
<Text style={{fontWeight:'bold',color:'#6D6E9C',
fontSize:12,width:140,padding:4,backgroundColor:'#DEF3E1',
 borderRadius:10,}}>  10% Cashback Applied</Text>
</View>


        </View>
     
        
</View>
{/* <Text style={{width:48.13,
height:22.79,backgroundColor:'#DADAE5',
textAlign:'center' ,borderRadius:10,position:'absolute',
textAlignVertical:'center',
left:168,top:430,color:'#A0A8CC',fontSize:10}}>
   12" 
</Text> */}

       </View>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
       <View style={{flex:1}}>
       <BlurView
          style={styles.blurboxmodal}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
          blurRadius={20}
        />
       <View style={{width:300,height:280,borderRadius:20 ,position:'absolute', backgroundColor:'white',top:200,left:30 }}>
<Image source={require('../../assets/success-icon.png')} style={{width:100,height:100,marginLeft:100,marginTop:40}}/>
<Text style={{textAlign:'center',marginTop:20,fontSize:20,fontWeight:'bold'}}>Order Placed Successfully</Text>
<TouchableOpacity  onPress={()=>{setModalVisible(false) ,navigateTo()} }style={{marginTop:20,marginHorizontal:100,borderRadius:10}}>
  <LinearGradient  colors={['#FFA360', '#F5313F']}
start={{ x: 1, y: 0 }}
end={{ x: 0, y: 0 }} 
style={{width:100,height:40,alignItems:'center',justifyContent:'center',borderRadius:10}}>
  <Text style={{textAlign:'center',fontWeight:'bold',color:'white'}}>OK</Text>
  </LinearGradient>
  </TouchableOpacity>
        </View>
       </View>
      </Modal>
       <NextBtn val='Place Order' task={()=>{setModalVisible(true)}} />

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
     fontSize:27,
     marginTop:8,
     marginLeft:30,

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
        width:315,
          height:287,
          borderRadius:20,         
          left:20,
          top:130,
          zIndex:4,
          backgroundColor:'rgba(255, 255, 255, 0.6)'}

, blurbox2:{ 
    // position:'absolute'
    width:295,
      height:280,
    
     borderRadius:20,
      marginTop:4,
      marginLeft:10,
      
      
    //   backgroundColor:'rgba(255, 255, 255, 0.4)'
    }
    , 
    blurbox22nd:{ 
        // position:'absolute'
        width:295,
          height:180,
        
         borderRadius:20,
          marginTop:4,
          marginLeft:10,
          
          
        //   backgroundColor:'rgba(255, 255, 255, 0.4)'
        }
        , 
      
    blurbox2nd:{
        position:'absolute',
        width:315,
          height:140,
          borderRadius:20,         
          left:20,
          top:430,
          zIndex:0,
          backgroundColor:'rgba(255, 255, 255, 0.6)'
    },
    blurboxmodal:{
     flex:1,
     width:'100%',
     height:'100%',
        
    }
})

export default HomeScreen5;