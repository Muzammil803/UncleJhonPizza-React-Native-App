import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View, Text ,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/AllScreens/home01';
import HomeScreen2 from './src/components/AllScreens/home02';
import HomeScreen3 from './src/components/AllScreens/home03';
import HomeScreen04 from './src/components/AllScreens/home04';
import HomeScreen5 from './src/components/AllScreens/home05';
// import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();
const HomeBtn=()=>{
  const navigation = useNavigation();
  const navigateTo=()=>{
      navigation.navigate('home')
  }
  return(
    <TouchableOpacity onPress={navigateTo}>

    <Image source={require('./src/assets/Vectorhomebtn.png')} />
  </TouchableOpacity>
  )
  
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" options={{
          title: 'Uncle Burger Pizzas',
          headerStyle: {
            backgroundColor: '#ffff',
            height: '48px',
            border: '0.25px solid #DADAE5'
          },
          headerTitleAlign: 'center',

          headerTintColor: '#DADAE5',
          headerTitleStyle: {
            color:'#6D6E9C',
            fontSize: 15
          },
          headerRight:()=>(
          <HomeBtn/>
          ),
         
        }} component={HomeScreen} />
        <Stack.Screen options={{
          title: 'Uncle Burger Pizzas',
          headerStyle: {
            backgroundColor: '#ffff',
            height: '48px',
            border: '0.25px solid #DADAE5'
          },
          headerTitleAlign: 'center',

          headerTintColor: '#DADAE5',
          headerTitleStyle: {
            color:'#6D6E9C',
            fontSize: 15,
          },
          headerRight:()=>(
            <HomeBtn/>
            ),
          
        }} name="home2" component={HomeScreen2} />

        <Stack.Screen name="home3" options={{
          title: 'Uncle Burger Pizzas',
          headerStyle: {
            backgroundColor: '#ffff',
            height: '48px',
            border: '0.25px solid #DADAE5',
          },
          headerTitleAlign: 'center',

          headerTintColor: '#DADAE5',
          headerTitleStyle: {
            color:'#6D6E9C',
            fontSize: 15,
          },
          headerRight:()=>(
            <HomeBtn/>
            )
        }} component={HomeScreen3} />
        <Stack.Screen name="home4" options={{
          title: 'Uncle Burger Pizzas',
          headerStyle: {
            backgroundColor: '#ffff',
            height: '48px',
            border: '0.25px solid #DADAE5'
          },
          headerTitleAlign: 'center',

          headerTintColor: '#DADAE5',
          headerTitleStyle: {
            color:'#6D6E9C',
            fontSize: 15
          },
          headerRight:()=>(
            <HomeBtn/>
            )
        }} component={HomeScreen04} />
        <Stack.Screen name="home5" options={{
          title: 'Uncle Burger Pizzas',
          headerStyle: {
            backgroundColor: '#ffff',
            height: '48px',
            border: '0.25px solid #DADAE5'
          },
          headerTitleAlign: 'center',

          headerTintColor: '#DADAE5',
          headerTitleStyle: {
            color:'#6D6E9C',
            fontSize: 15
          },
          headerRight:()=>(
            <HomeBtn/>
            )
        }} component={HomeScreen5} />
      </Stack.Navigator>

      {/* <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={HomeScreen} />
        <Drawer.Screen name="home2" component={HomeScreen2} />
      </Drawer.Navigator> */}

    </NavigationContainer>
  );
}
export default App;