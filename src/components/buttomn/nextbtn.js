
import { Button,View,Text,TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
function NextBtn({val,task} ){
    return(
        <TouchableOpacity
        style={{
            height: 59,
            // backgroundColor: 'orange',
            position:'absolute',
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            bottom:0
         }}

onPress={()=>{task()}}
>
<LinearGradient colors={['#FFA360', '#F5313F']}
start={{ x: 1, y: 0 }}
end={{ x: 0, y: 0 }} 
style={{width:"100%", justifyContent:'center',
alignItems:'center',height:'100%'}}
>

            <Text style={{fontSize:15,color:'white', fontWeight:"700",fontFamily:'roboto'}}>{val}</Text>
        

            </LinearGradient>
        </TouchableOpacity>
    )

}

export default NextBtn;